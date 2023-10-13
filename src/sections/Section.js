import "./dummystyles.css"
import { useRef, useState, createContext } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
// import { TelescopingContent } from "../ScrollingInteractions"
import { TransformingContent } from "../TransformingContent"
import { HighlightText } from "../TextInteractions"

export { Item }

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end center", "start start"] })
  useMotionValueEvent(scrollYProgress, "change", (latest) => { console.log("Page scroll: ", latest) })

  return (
    <section>
      <div ref={ref}>
        <TransformingContent child={<p>Moving Content</p>} positions={[[0, 500, 100],[100, 500, 0]]} scrollInfo={[0, 0.5, 1]} />
        <figure className="progress">
          <svg id="progress" width="100" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}
