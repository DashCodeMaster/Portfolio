'use client';

import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 120, pause = 1600) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentIndex = index % words.length;
    const fullText = words[currentIndex];
    const timeout = window.setTimeout(() => {
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        window.setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => window.clearTimeout(timeout);
  }, [index, isDeleting, pause, speed, text, words]);

  return text;
}

