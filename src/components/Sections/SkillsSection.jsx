import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import SkillCard from "../Common/SkillCard";
import { skills } from "../../data/skillsData";

const SkillsSection = () => {
  const [toasterMessage, setToasterMessage] = useState("");
  const [showToasterState, setShowToasterState] = useState(false);

  // Handle skill click with semantic relationship mapping
  const handleSkillClick = (skillName) => {
    const allExperienceCards = document.querySelectorAll(".experience-card");
    const cardsWithMatchingSkill = [];

    // React toaster function
    const displayToaster = (message) => {
      setToasterMessage(message);
      setShowToasterState(true);
      setTimeout(() => setShowToasterState(false), 3000);
    };

    // Define semantic relationships for core technologies
    const getRelatedTechnologies = (skill) => {
      const skillLower = skill.toLowerCase();

      switch (skillLower) {
        case "html":
          return ["react", "angular", "html"];
        case "css":
          return ["react", "angular", "tailwindcss", "css"];
        case "javascript":
          return [
            "react",
            "angular",
            "typescript",
            "jest",
            "redux",
            "node.js",
            "javascript",
          ];
        case "git":
        case "github":
          return "highlight-all-experiences";
        case "vite":
        case "tailwindcss":
          return "highlight-portfolio";
        default:
          return [skillLower];
      }
    };

    const relatedTechs = getRelatedTechnologies(skillName);

    // Special handling for Git/GitHub and Vite/TailwindCSS
    if (relatedTechs === "highlight-all-experiences") {
      allExperienceCards.forEach((currentCard, cardPosition) => {
        cardsWithMatchingSkill.push({
          cardElement: currentCard,
          position: cardPosition,
        });
      });

      displayToaster(
        `${skillName} is used across all development projects for version control and collaboration`
      );
    } else if (relatedTechs === "highlight-portfolio") {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          const portfolioParagraph = aboutSection.querySelector("p");
          if (portfolioParagraph) {
            portfolioParagraph.classList.add("highlight-experience");
            setTimeout(() => {
              portfolioParagraph.classList.remove("highlight-experience");
            }, 3000);
          }
        }, 500);
      }

      displayToaster(
        `This interactive portfolio was built using ${skillName} to showcase modern frontend development capabilities`
      );
      return;
    } else {
      allExperienceCards.forEach((currentCard, cardPosition) => {
        const technologyTags = currentCard.querySelectorAll(".tech-tag");
        let currentCardHasSkill = false;

        technologyTags.forEach((singleTag) => {
          const tagText = singleTag.textContent.toLowerCase();

          const isMatch = relatedTechs.some(
            (relatedTech) =>
              tagText.includes(relatedTech) || relatedTech.includes(tagText)
          );

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
    }

    // Scroll and highlight
    if (cardsWithMatchingSkill.length > 0) {
      let cardToScrollTo = cardsWithMatchingSkill[0].cardElement;

      cardToScrollTo.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        cardsWithMatchingSkill.forEach((matchingCard) => {
          const cardElement = matchingCard.cardElement;
          const tagsInCard = cardElement.querySelectorAll(".tech-tag");

          tagsInCard.forEach((tag) => {
            const tagContent = tag.textContent.toLowerCase();

            if (relatedTechs !== "highlight-all-experiences") {
              const shouldHighlight = relatedTechs.some(
                (relatedTech) =>
                  tagContent.includes(relatedTech) ||
                  relatedTech.includes(tagContent)
              );

              if (shouldHighlight) {
                tag.classList.add("highlight-skill");
                setTimeout(() => {
                  tag.classList.remove("highlight-skill");
                }, 5000);
              }
            }
          });

          cardElement.classList.add("highlight-experience");
          setTimeout(() => {
            cardElement.classList.remove("highlight-experience");
          }, 5000);
        });
      }, 500);
    } else {
      console.log(`No experience found containing skill: ${skillName}`);
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/assets/CV_Tejal_Jambhulkar_Frontend_Developer_Portfolio.pdf";
    downloadLink.download = "CV_Tejal_Jambhulkar_Frontend_Developer.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section id="skills" className="py-20 px-4">
      {showToasterState && (
        <div className="fixed top-5 right-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-4 rounded-lg shadow-xl z-50 max-w-sm transition-all duration-300 ease-in-out transform animate-pulse">
          {toasterMessage}
        </div>
      )}
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
