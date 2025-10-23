import { Calendar, MapPin, Award } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Dynamic Frontend Developer with around 5 years of experience in
              building and enhancing applications. Proficient in React, Angular,
              and state management using Redux. Skilled in modern development
              tools and recently created this portfolio using React, Vite, and
              Tailwind CSS to demonstrate current frontend capabilities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Successfully improved client scheduling systems and user
              engagement through efficient UI revamps. Experienced in Agile
              methodologies and deployment practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Committed to delivering high-quality, user-centric solutions that
              drive business objectives and elevate user experiences.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-bold text-pink-400 mb-2">5</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Personal info */}
            <div className="flex items-center space-x-3 text-gray-300">
              <Calendar className="text-purple-400" size={20} />
              <span>
                <strong>Born:</strong> November 6, 1993 - Nagpur, India
              </span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="text-purple-400" size={20} />
              <span>
                <strong>Location:</strong> Enkhuizen, Netherlands
              </span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Award className="text-purple-400" size={20} />
              <span>
                <strong>Nationality:</strong> Indian (Work permit sponsorship
                not required)
              </span>
            </div>

            {/* Language skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Languages
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>English</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hindi</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marathi</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dutch</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
