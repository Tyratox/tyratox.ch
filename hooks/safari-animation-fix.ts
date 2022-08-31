// safari does not handle css animation in forwards mode properly
// if one of the to / 100% values is a css variable
// in this case the value of the css property remains the same
// even if the value of the css variable is changed

import { useEffect } from "react";

const listener = (event: AnimationEvent) => {
  (<Element>event.currentTarget).classList.add("animation-ended");
};

const useSafariAnimationFix = (refs: React.RefObject<SVGElement>[]) => {
  useEffect(() => {
    refs.forEach((ref) =>
      ref.current.addEventListener("animationend", listener)
    );

    return () =>
      refs.forEach((ref) =>
        ref.current?.removeEventListener("animationend", listener)
      );
  }, [refs]);
};

export default useSafariAnimationFix;
