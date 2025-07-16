import SectionHeader from "../Common/SectionHeader";
import ExperienceCard from "../Common/ExperienceCard";
import { experiences } from "../../data/experienceData";

const ExperienceSection = () => {
  // Handle skill click
  const handleSkillClick = (skill) => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });

    // Highlight matching experiences
    setTimeout(() => {
      const experienceCards = document.querySelectorAll(".experience-card");

      experienceCards.forEach((card) => {
        const techTags = card.querySelectorAll(".tech-tag");
        let hasSkill = false;

        // Check if card contains the skill
        techTags.forEach((tag) => {
          if (
            tag.textContent.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(tag.textContent.toLowerCase())
          ) {
            hasSkill = true;

            // Highlight skill tag
            tag.classList.add("highlight-skill");
            setTimeout(() => tag.classList.remove("highlight-skill"), 3000);
          }
        });

        // Highlight card
        if (hasSkill) {
          card.classList.add("highlight-experience");
          setTimeout(() => card.classList.remove("highlight-experience"), 3000);
        }
      });
    }, 500);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Experience" />

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
