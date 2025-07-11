import React from 'react';

const SkillCard = ({ name, icon: Icon, level, isHighlighted = false }) => {
  return (
    <div className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
      isHighlighted 
        ? 'highlight-skill' 
        : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
    }`}>
      <div className="flex items-center space-x-3">
        <Icon size={24} className="text-purple-400" />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;