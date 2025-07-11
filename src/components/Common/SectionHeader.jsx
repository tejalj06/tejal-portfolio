import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
export default SectionHeader;