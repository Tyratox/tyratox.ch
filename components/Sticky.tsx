import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

const StickyElement = styled.div`
  position: sticky;
`;

interface IProps {
  className?: string;
  render: (stuck: boolean) => React.ReactNode;
}

const Sticky = ({ className = "", render }: IProps) => {
  const [stuck, setStuck] = useState(false);
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return (
    <StickyElement className={className} ref={ref}>
      {render(stuck)}
    </StickyElement>
  );
};

export default Sticky;
