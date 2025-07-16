import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Get In Touch" />

        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and see how we can work together!
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <a
                  href="//mailto:jambhulkartejal06@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Mail
                    size={16}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  jambhulkartejal06@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-300">
                  <span className="text-gray-300">+31-617761633</span>
                </p>
              </div>
            </div>

            {/* Location */}
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
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Social links */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700  hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/tejal-jambhulkar-854a17125"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://github.com/tejalj06"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                >
                  <Github
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>

            {/* Work status */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700  hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-semibold text-pink-400 mb-4">
                Work Status
              </h4>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Availability:</span> Open to new
                opportunities
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Work Authorization:</span> No
                sponsorship required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
