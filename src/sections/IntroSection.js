import { useRef, useState, createContext } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import {HighlightText} from '../TextInteractions';

export {NamingIntro}

//NamingSTRINGS.N_Intro.paragraphs : array
function NamingIntro({contentImages, contentText}) {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref, offset: ["end center", "start start"] })
    // useMotionValueEvent(scrollYProgress, "change", (latest) => { console.log("Page scroll: ", latest) })
    // const paragraphs = contentText.paragraphs;



    return (
        <>
        <section></section>
         <section>
            <HighlightText content={contentText.paragraphs} />
        </section>
        <section></section>
        </>
      );
}
