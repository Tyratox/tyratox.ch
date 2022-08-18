import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

const CollapsibleContainer = styled.div`
  position: relative;
`;

const Children = styled.div<{ isOpen?: boolean; height: number }>`
  height: ${({ isOpen, height }) => (isOpen ? height : "0")}px;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`;

const Collapsible = ({ button, children }: IProps) => {
  const measurementRef = useRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (measurementRef) {
      setHeight(measurementRef.current.clientHeight);
    }
  }, [measurementRef]);

  return (
    <CollapsibleContainer>
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {button}
      </div>
      <Children isOpen={isOpen} height={height}>
        <div ref={measurementRef}>{children}</div>
      </Children>
    </CollapsibleContainer>
  );
};

export default Collapsible;
