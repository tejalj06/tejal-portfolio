import { Code } from "lucide-react";

const SkillCard = ({ skill, onSkillClick }) => {
  return (
    <div
      className="skill-card bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
      onClick={() => onSkillClick(skill)}
    >
      <Code
        className="mx-auto mb-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
        size={24}
      />
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
        {skill}
      </span>
    </div>
  );
};

export default SkillCard;
