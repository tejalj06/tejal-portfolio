import { GraduationCap, Calendar } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Education" />

        {/* Education card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <GraduationCap size={24} />
              </div>

              {/* Education details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Engineering in Computer Science and Engineering
                </h3>

                <div className="text-purple-400 font-semibold mb-2">
                  Sipna College of Engineering and Technology, Amravati, India
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span>August 2011 - May 2017</span>
                </div>

                {/* Description */}
                <p className="text-gray-300">
                  Equivalent to an HBO bachelor's degree. Comprehensive
                  curriculum covering software development, algorithms, database
                  systems, and web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
