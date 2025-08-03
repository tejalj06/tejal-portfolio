import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailClick = () => {
    const email = "jambhulkartejal06@gmail.com";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Get In Touch" />

        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and see how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <button
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Mail
                    size={16}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  jambhulkartejal06@gmail.com
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-300">
                  Enkhuizen, Noord Holland, Netherlands
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700  hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/tejal-jambhulkar-854a17125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                  >
                    <Linkedin
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href="https://github.com/tejalj06/tejal-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                  >
                    <Github
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700  hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-xl font-semibold text-pink-400 mb-4">
                  Work Status
                </h4>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Availability:</span> Open to
                  new opportunities
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Work Authorization:</span> No
                  sponsorship required
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex flex-col space-y-6">
            <div className="bg-slate-800/60 border-2 border-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.5)] p-6 rounded-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] transition-all duration-300 flex-1">
              <h4 className="text-xl font-semibold text-purple-300 mb-6">
                Send me a message
              </h4>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-300 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-600 focus:border-purple-400 focus:ring-purple-400"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-300 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-600 focus:border-purple-400 focus:ring-purple-400"
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-3 top-4 text-gray-400"
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </div>

                <button
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-white ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  }`}
                >
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
