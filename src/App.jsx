// Section components
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import EducationSection from "./components/Sections/EducationSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/SkillsSection";

// Layout components
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";

// Custom hook for scroll tracking
import useScrollTracking from "./hooks/useScrollTracking";

const App = () => {
  const { activeSection, isScrolled } = useScrollTracking();

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default App;
