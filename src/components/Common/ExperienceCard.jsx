import React from "react";
import { Calender, MapPin } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  description,
  technologies,
  isHighligted = false,
}) => {
  return (
    <div
      className={`p-6 rounded-lg-border transition-all duration-300 ${
        isHighligted
          ? "highlight-experience"
          : "bg-slate-800/50 border-slate-700 hover:border-purple-500/50"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="text-purple-400 font-semibold mb-2">{company}</div>
        </div>
        <div className="text-gray-400 text-sm">
          <div className="flex items-center space-x-1 mb-1">
            <Calendar size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;