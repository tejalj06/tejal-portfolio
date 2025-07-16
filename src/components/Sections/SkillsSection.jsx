import SectionHeader from "../Common/SectionHeader";
import SkillCard from "../Common/SkillCard";
import { skills } from "../../data/skillsData";

const SkillsSection = () => {
  // Handle skill click
  const handleSkillClick = (skillName) => {
    const allExperienceCards = document.querySelectorAll(".experience-card");
    const cardsWithMatchingSkill = [];

    // Find matching cards
    allExperienceCards.forEach((currentCard, cardPosition) => {
      const technologyTags = currentCard.querySelectorAll(".tech-tag");
      let currentCardHasSkill = false;

      technologyTags.forEach((singleTag) => {
        const tagText = singleTag.textContent.toLowerCase();
        const searchSkill = skillName.toLowerCase();

        const isMatch =
          tagText.includes(searchSkill) || searchSkill.includes(tagText);

        if (isMatch) {
          currentCardHasSkill = true;
        }
      });

      if (currentCardHasSkill) {
        cardsWithMatchingSkill.push({
          cardElement: currentCard,
          position: cardPosition,
        });
      }
    });

    // Scroll and highlight
    if (cardsWithMatchingSkill.length > 0) {
      let cardToScrollTo;

      if (cardsWithMatchingSkill.length === 1) {
        cardToScrollTo = cardsWithMatchingSkill[0].cardElement;
      } else {
        cardToScrollTo = cardsWithMatchingSkill[0].cardElement;
      }

      cardToScrollTo.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Add highlighting effects
      setTimeout(() => {
        cardsWithMatchingSkill.forEach((matchingCard) => {
          const cardElement = matchingCard.cardElement;
          const tagsInCard = cardElement.querySelectorAll(".tech-tag");

          tagsInCard.forEach((tag) => {
            const tagContent = tag.textContent.toLowerCase();
            const skillToFind = skillName.toLowerCase();

            if (
              tagContent.includes(skillToFind) ||
              skillToFind.includes(tagContent)
            ) {
              tag.classList.add("highlight-skill");
              setTimeout(() => {
                tag.classList.remove("highlight-skill");
              }, 3000);
            }
          });

          cardElement.classList.add("highlight-experience");
          setTimeout(() => {
            cardElement.classList.remove("highlight-experience");
          }, 3000);
        });
      }, 500);
    } else {
      console.log(`No experience found containing skill: ${skillName}`);
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/assets/CV_Tejal_Jambhulkar_Frontend_Developer.pdf";
    downloadLink.download = "CV_Tejal_Jambhulkar_Frontend_Developer.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        {/* Instruction text */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Click on any skill to see related experience
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>

        {/* Resume download */}
        <div className="mt-12 text-center">
          <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get My Resume
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Download my complete resume with detailed experience, projects,
              and qualifications
            </p>
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">📄</span>
              Download Resume
            </button>
            <p className="text-sm text-gray-400 mt-4">
              PDF format • Updated {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Skills categories */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">
                Frontend
              </h4>
              <p className="text-gray-300">
                React, Angular, TypeScript, JavaScript, HTML, CSS, TailwindCSS
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-semibold text-pink-400 mb-3">
                Backend & Database
              </h4>
              <p className="text-gray-300">
                Node.js, MongoDB, MySQL, REST APIs
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">
                Tools & Others
              </h4>
              <p className="text-gray-300">
                Git, GitHub, Jest, NPM, Webpack, Vite, Jira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
