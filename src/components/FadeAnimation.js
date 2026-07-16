"use client";

import { useInView } from "react-intersection-observer";

export const FadeAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: "-150px",
    triggerOnce: true,
  });

  return (
    <div inView={inView} ref={ref}>
      {children}
    </div>
  );
};
