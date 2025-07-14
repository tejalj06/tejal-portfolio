import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const ExperienceCard = ({ experience }) => {
  if (!experience) {
    console.warn("ExperienceCard: experience prop is undefined");
    return null;
  }

  return (
    <div className="experience-card bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
      {/* Header with job title, company, and metadata */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {experience.title || "No title provided"}
          </h3>
          <div className="flex items-center space-x-2 text-purple-400 mb-2">
            <Briefcase size={18} />
            <span className="text-lg font-semibold">
              {experience.company || "No company provided"}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{experience.duration || "Duration not specified"}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>{experience.location || "Location not specified"}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Technologies Used:
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies && experience.technologies.length > 0 ? (
            experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="tech-tag bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="text-gray-400 italic">
              No technologies specified
            </span>
          )}
        </div>
      </div>

      {/* Key achievements section */}
      <div>
        <h4 className="text-lg font-semibold text-pink-400 mb-3">
          Key Achievements:
        </h4>

        <ul className="space-y-2">
          {experience.achievements && experience.achievements.length > 0 ? (
            experience.achievements.map((achievement, achIndex) => (
              <li
                key={achIndex}
                className="flex items-start space-x-2 text-gray-300"
              >
                <ArrowRight
                  size={16}
                  className="text-purple-400 mt-1 flex-shrink-0"
                />
                <span>{achievement}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No achievements specified</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
