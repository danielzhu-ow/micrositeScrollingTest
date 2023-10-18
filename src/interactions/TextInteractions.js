import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent
} from "framer-motion";

export {HighlightText}

const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  // const scrollValue = useTransform(scrollYProgress,  [0.15, 0],["0%", "100%"]);
  const scrollValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.9], //map these vlaues: page scroll
    [0.2, 1, 1, 0.2], // to these values: opacity
    { clamp: true }
  );
  // const clipPathVal = useMotionTemplate`inset(0% 0% ${scrollValue} 0%)`;

  return (
    <span className="text-container" ref={contentRef}>
      <motion.span
        style={{ 
          // clipPath: clipPathVal,
          opacity: scrollValue
         }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text">{content}</span>
    </span>
  );
};


const HighlightText = ({ content }) => {
  return (
    <div className="outer">
      <div className="inner">
        <p>
          {content.map((item) => (
            <ContentLine key={item} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};
