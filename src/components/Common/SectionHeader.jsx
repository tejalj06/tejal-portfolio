const SectionHeader = ({ title }) => {
  return (
    <div className="text-center mb-16">
      {/* Main section title with gradient text */}
      <h2 className="text-4xl md:text-4xl font-bold mb-6  leading-tight py-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
    </div>
  );
};

export default SectionHeader;
