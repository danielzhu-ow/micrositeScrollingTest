import "./dummystyles.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useImageLoader } from '../constants/imgContent'; //usage: NamingIMAGES.cloud

export { Item }

function Item() {
    const NamingIMAGES = useImageLoader();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end center", "start start"] })

    function TelescopingContent( positions, scrollInfo, scrollYProgress ) {
        //Destruct Info
        let scrollStart = props.scrollInfo[0]
        let scrollDuration = props.scrollInfo[1]

        //Finding Positions
        let index = 0
        let calcTime = props.scrollInfo[0]
        for (let i = 0; i < props.scrollInfo.length - 1; i++) {
            if (calcTime <= progress) { scrollStart = calcTime; scrollDuration = props.scrollInfo[i + 1]; index = i }
            calcTime += props.scrollInfo[i + 1]
        }

        //Timing
        const scrollTiming = (progress - scrollStart) / scrollDuration
        let inScope = true
        if (scrollTiming < 0 || scrollTiming > 1) { inScope = false }

        let startPosition = props.positions[index]
        let endPosition = props.positions[index + 1]
        const x = startPosition[0] + scrollTiming * (endPosition[0] - startPosition[0])
        const y = startPosition[1] + scrollTiming * (endPosition[1] - startPosition[1])

        if (inScope) {
            return (
                <motion.div style={{
                    position: "fixed",
                    top: y,
                    left: x,
                }}>
                    {props.child}
                </motion.div>
            )
        }
    }

    return (
        <section>
            <div ref={ref}>
                <figure className="progress">
                    <TelescopingContent child={<img src={NamingIMAGES.rect} alt="rect" />} positions={[[0, 0], [500, 0]]} scrollInfo={[0, 1]} scrollYProgress={getProgress} ref={ref} />
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
