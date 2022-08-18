import React, { useEffect, useState } from "react";

const useInView = (ref: React.RefObject<Element>) => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setInView((inView) => inView || e.intersectionRatio >= 1),
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return inView;
};

export default useInView;
