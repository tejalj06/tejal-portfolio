import { ChevronDown, MapPin, Mail } from "lucide-react";
import useTypeWriter from "../../hooks/useTypeWriter";
import useSkillRotation from "../../hooks/useSkillRotation";
import { skills } from "../../data/skillsData";
import tejalImage from "../../assets/Tejal.jpg";

const HeroSection = ({ scrollToSection }) => {
  // Custom hooks
  const typedText = useTypeWriter("Dynamic Frontend Developer");
  const currentSkillIndex = useSkillRotation(skills);

  // Handle skill click
  const handleSkillClick = (skill) => {
    scrollToSection("experience");

    // Highlight matching experiences
    setTimeout(() => {
      const experienceCards = document.querySelectorAll(".experience-card");

      experienceCards.forEach((card) => {
        const techTags = card.querySelectorAll(".tech-tag");
        let hasSkill = false;

        techTags.forEach((tag) => {
          if (
            tag.textContent.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(tag.textContent.toLowerCase())
          ) {
            hasSkill = true;
            tag.classList.add("highlight-skill");
            setTimeout(() => tag.classList.remove("highlight-skill"), 3000);
          }
        });

        if (hasSkill) {
          card.classList.add("highlight-experience");
          setTimeout(() => card.classList.remove("highlight-experience"), 3000);
        }
      });
    }, 500);
  };

  const handleEmailClick = () => {
    const email = "jambhulkartejal06@gmail.com";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Profile section */}
        <div className="mb-8">
          {/* Profile picture */}
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5 flex items-center justify-center">
              <img
                src={tejalImage}
                alt="Tejal Jambhulkar"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            TEJAL
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              JAMBHULKAR
            </span>
          </h1>

          {/* Typewriter effect */}
          <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>

          {/* Specialization */}
          <div className="text-lg text-purple-300 mb-8">
            Specializing in{" "}
            <span
              className="font-bold text-pink-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
              onClick={() => handleSkillClick(skills[currentSkillIndex])}
            >
              {skills[currentSkillIndex]}
            </span>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex justify-center space-x-6 mb-12">
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin size={20} />
            <span>Enkhuizen, Netherlands</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Mail size={20} />
            <button
              onClick={handleEmailClick}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <span>jambhulkartejal06@gmail.com</span>
            </button>
          </div>
        </div>

        {/* Scroll button */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
