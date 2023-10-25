import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import { ContentWrapper } from "../ArticleHeader";

export {HighlightText}

const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

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
  let mainBlock = (
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
  return (
    <ContentWrapper>
      {mainBlock}
    </ContentWrapper>
  )
};

const FocusTest = ({startingPos, paragraphs}) => {
  return(
    <>
     <TransformingContent positions={[[50, 50, 50, 50], startingPos]} scrollInfo={adjustedTimings[1][5]} alignment={['left', 'top']} child={
                <OpacityContent scrollInfo={adjustedTimings[1][5]} child={<ArticleBodyBlock contentString={text.Intro.paragraphs[0]} />} />
    } />
            <TransformingContent positions={[[50, 50, 50, 50], [-33, 20, 20, 117]]} scrollInfo={adjustedTimings[1][5]} alignment={['left', 'top']} child={
                <OpacityContent scrollInfo={adjustedTimings[1][5]} child={<ArticleBodyBlock contentString={text.Intro.paragraphs[1]} />} />
              } />
  </>
  )
}
