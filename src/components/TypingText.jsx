import { useState, useEffect } from "react";

const phrases = [
  "I am a Computer Science student at the University of Toronto.",
  "I am interested in full-stack development, systems, and security.",
  "I enjoy building real-world projects and solving technical problems.",
];

function TypingText() {
  const [index, setIndex] = useState(0); // which phrase
  const [subIndex, setSubIndex] = useState(0); // how many characters shown
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // just in case index goes out of range
    if (index === phrases.length) {
      setIndex(0);
      return;
    }

    // finished typing, pause, then start deleting
    if (!deleting && subIndex === phrases[index].length) {
      const pause = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    // finished deleting, move to next phrase
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const typeSpeed = 55; // was 110 (typing)
    const deleteSpeed = 30; // was 50  (deleting)

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span>
      {phrases[index].substring(0, subIndex)}
      <span className="border-r border-slate-300 ml-[1px] animate-pulse" />
    </span>
  );
}

export default TypingText;
