import React, { useEffect, useState } from "react";

const useInView = (ref: React.RefObject<Element>) => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const cachedRef = ref.current;
    if (IntersectionObserver) {
      const observer = new IntersectionObserver(
        ([e]) => setInView((inView) => inView || e.intersectionRatio >= 1),
        { threshold: [1] }
      );
      observer.observe(cachedRef);
      return () => observer.unobserve(cachedRef);
    } else {
      setInView(true);
    }
  }, [ref]);

  return inView;
};

export default useInView;
