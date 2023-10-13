import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import './sections/dummystyles.css';

export {HighlightText}

const variants = {
  active: { opacity: 1 },
  inactive: { opacity: 0.3 }
};

const useParagraphHooks = (rCont) => {
  const controls = useAnimation();
  // const ref = useRef(null);
  // const [inView] = useInView({ root: rCont });
  const [ref, inView] = useInView({ root: rCont.current });

  useEffect(() => {
    if (inView) {
      controls.start("active");
    } else {
      controls.start("inactive");
    }
  }, [controls, inView]);

  return { controls, ref };
};

const Paragraph = ({ paragraph, refCont }) => {
  const { controls, ref } = useParagraphHooks(refCont);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="inactive"
      variants={variants}
      className="square"
    >
      <p>{paragraph}</p>
    </motion.div>
  );
};

function HighlightText({ paragraphs }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
      <div ref={container} className="windCont">
        <div className="test">   
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} paragraph={paragraph} refCont={container} />
        ))}
        </div>   
      </div>
  );
}