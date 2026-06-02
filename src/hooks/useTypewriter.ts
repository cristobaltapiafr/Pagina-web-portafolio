// ─────────────────────────────────────────────
//  useTypewriter — cycles through an array of
//  strings with a typing / erasing animation.
// ─────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], typeSpeed = 80, eraseSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex]  = useState(0);
  const [charIndex, setCharIndex]  = useState(0);
  const [typing,    setTyping]     = useState(true);

  useEffect(() => {
    const current = words[wordIndex];

    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), pauseMs);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, eraseSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
  }, [typing, charIndex, wordIndex, words, typeSpeed, eraseSpeed, pauseMs]);

  return displayed;
}
