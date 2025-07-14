const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  return (
    // Fixed nav with conditional background - transparent when at top, dark when scrolled
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo - using gradient text effect */}
          <div className="absolute left-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            TJ
          </div>

          {/* Navigation menu - hidden on mobile */}
          <div className="absolute right-4 hidden md:flex space-x-8">
            {["About", "Experience", "Skills", "Education", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
