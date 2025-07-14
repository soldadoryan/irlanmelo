"use client";
import { useEffect } from "react";
import { getDataAttributes } from "./getAttrs";
import { getCurrentPercent } from "./getCurrentPercent";

function ScrollingAnimation() {
  const handleScroll = () => {
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll("*[data-animation]");
      elements.forEach((el) => {
        const scroll = window.scrollY;
        const {
          start,
          end,
          value,
          startvalue,
          endvalue,
          defaultvalue,
          unit,
          attribute,
          prefixvalue,
          sufixvalue,
        } = getDataAttributes(el);
        console.log(value, scroll, start);
        const currentPercent = getCurrentPercent(scroll, start, end);
        if (value) {
          if (scroll >= start) el.style[attribute] = value;
          else el.style[attribute] = defaultvalue;
        } else {
          const currentAnimationValue =
            (currentPercent / 100) * (+endvalue - +startvalue);
          el.style[attribute] = `
            ${prefixvalue}${
            currentAnimationValue + +startvalue
          }${sufixvalue}${unit}`;
        }
      });
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <></>;
}

export default ScrollingAnimation;
