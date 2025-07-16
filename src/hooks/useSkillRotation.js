import { useState, useEffect } from "react";

const useSkillRotation = (skills, interval = 2000) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [skills.length, interval]);

  return currentSkillIndex;
};

export default useSkillRotation;
