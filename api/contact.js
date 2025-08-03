import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (message.trim().length < 10) {
    return res
      .status(400)
      .json({ message: "Message must be at least 10 characters long" });
  }

  try {
    // Send notification email
    await resend.emails.send({
      from: "portfolio@resend.dev",
      to: "jambhulkartejal06@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Contact from Portfolio</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="margin: 15px 0;">
            <p><strong>Message:</strong></p>
            <div style="background: #fff; border-left: 3px solid #007cba; padding: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">Reply to: ${email}</p>
        </div>
      `,
    });

    // Send auto-reply
    await resend.emails.send({
      from: "portfolio@resend.dev",
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Thanks for getting in touch!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and I'll get back to you within 24-48 hours.</p>
          <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + "..." : message}"</p>
          </div>
          <p>Feel free to check out my work on <a href="https://github.com/tejalj06">GitHub</a> while you wait!</p>
          <p>Best regards,<br>Tejal Jambhulkar</p>
        </div>
      `,
    });

    res.status(200).json({
      message: "Message sent successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      message: "Failed to send message. Please try again.",
    });
  }
}
