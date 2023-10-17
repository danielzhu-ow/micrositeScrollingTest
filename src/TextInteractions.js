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
    [0, 0.5, 0.5, 1], //map these vlaues: page scroll
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


// WORKING VERSION
// import React, { useEffect, useRef } from "react";
// import { useAnimation, motion, useScroll } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // import './sections/dummystyles.css';

// export {HighlightText}

// const variants = {
//   active: { opacity: 1 },
//   inactive: { opacity: 0.3 }
// };

// const useParagraphHooks = (rCont) => {
//   const controls = useAnimation();
//   // const ref = useRef(null);
//   // const [inView] = useInView({ root: rCont });
//   const [ref, inView] = useInView({ root: rCont.current });

//   useEffect(() => {
//     if (inView) {
//       controls.start("active");
//     } else {
//       controls.start("inactive");
//     }
//   }, [controls, inView]);

//   return { controls, ref };
// };

// const Paragraph = ({ paragraph, refCont }) => {
//   const { controls, ref } = useParagraphHooks(refCont);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="inactive"
//       variants={variants}
//       className="paragraph"
//     >
//       <p>{paragraph}</p>
//     </motion.div>
//   );
// };

// function HighlightText({ paragraphs }) {
//   const { scrollYProgress } = useScroll();
//   const container = useRef(null);

//   // scrollYProg % paragraph.height
//   return (
//     <>
//     <motion.div 
//       ref={container} 
//       className="windCont"
//       style={{
        
//       }} > 
//         <div className="allParagraphCont">   
//         {paragraphs.map((paragraph, index) => (
//           <Paragraph key={index} paragraph={paragraph} refCont={container} />
//         ))}
//         </div>  
//     </motion.div>  
      
      
//   </>
     
//   );
// }


// const variants = {
//   active: { opacity: 1 },
//   inactive: { opacity: 0.3 }
// };

// const useParagraphHooks = (rCont) => {
//   const controls = useAnimation();
//   // const ref = useRef(null);
//   // const [inView] = useInView({ root: rCont });
//   const [ref, inView] = useInView({ root: rCont.current });

//   useEffect(() => {
//     if (inView) {
//       controls.start("active");
//     } else {
//       controls.start("inactive");
//     }
//   }, [controls, inView]);

//   return { controls, ref };
// };

// const Paragraph = ({ paragraph, refCont }) => {
//   const { controls, ref } = useParagraphHooks(refCont);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="inactive"
//       variants={variants}
//       className="paragraph"
//     >
//       <p>{paragraph}</p>
//     </motion.div>
//   );
// };

// function HighlightText({ paragraphs }) {
//   const container = useRef(null);
//   // const { scrollYProgress } = useScroll();

//   return (
//       <div ref={container} className="windCont">
//         <div className="allParagraphCont">   
//         {paragraphs.map((paragraph, index) => (
//           <Paragraph key={index} paragraph={paragraph} refCont={container} />
//         ))}
//         </div>   
//       </div>
//   );
// }