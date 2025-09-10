import { useState } from "react";
import { User, Briefcase, Code, GraduationCap, Mail } from "lucide-react";

const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", icon: User },
    { name: "Experience", icon: Briefcase },
    { name: "Skills", icon: Code },
    { name: "Education", icon: GraduationCap },
    { name: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Navigation bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="absolute left-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              TJ
            </div>

            {/* Desktop menu */}
            <div className="absolute right-4 hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="absolute right-4 md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            >
              <span
                className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm">
            <div className="flex flex-col pt-20 px-6">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.name.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 text-left py-4 text-lg border-b border-gray-700/50 hover:text-purple-400 transition-colors duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
