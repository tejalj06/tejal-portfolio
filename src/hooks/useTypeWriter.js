import { useState, useEffect } from "react";

const useTypeWriter = (text, speed = 100) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typeWriter = () => {
      if (typedText.length < text.length) {
        setTypedText(text.slice(0, typedText.length + 1));
      }
    };

    const timer = setTimeout(typeWriter, speed);

    return () => clearTimeout(timer);
  }, [typedText, text, speed]);

  return typedText;
};

export default useTypeWriter;
