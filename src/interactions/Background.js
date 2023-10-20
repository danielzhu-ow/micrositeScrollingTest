import { useScroll, useTransform, useMotionValueEvent, useMotionTemplate, motion } from "framer-motion"
import { userRef } from 'react'
export { Background }

function Background({ children, background, height }) {

    return (
        <div>
            {typeof background === 'string' && background.charAt(0) === '#' ?
                <div style={{
                    // position: "absolute",
                    backgroundColor: background,
                    height: height + "vh",
                    width: "100%",
                    zIndex: 0,
                }}></div> :
                <div style={{
                    // position: "absolute",
                    backgroundImage: "url(" + background + ")",
                    backgroundSize: "100% 100%",
                    backgroundAttachment: "fixed",
                    height: height + "vh",
                    width: "100%",
                    zIndex: 0,
                }}></div>
            }
            {children}
        </div>
    )
}

// function Background({ children, currBackground, softTransitions, scrollInfo }) {
//     console.log(currBackground);
//     const { scrollYProgress } = useScroll()

//     let bgDivToReturn
//     let fromTop = 0

//     let transitionTimings = []
//     let transitionValues = []

//     for (let i = 0; i < scrollInfo.length; i++) {
//         if (currBackground[0] === "#") { //color string
//             bgDivToReturn = (<div style={{
//                 position: "absolute",
//                 key: currBackground, // change this + i
//                 backgroundColor: currBackground,
//                 top: fromTop * 100 + "%",
//                 height: scrollInfo[i] * 100 + "%",
//                 width: "100%",
//                 zIndex: 0,
//             }}></div>)
//         } else { //image
//             bgDivToReturn = (<div style={{
//                 position: "absolute",
//                 key: currBackground,
//                 top: fromTop * 100 + "%",
//                 backgroundImage: "url(" + currBackground + ")", // change so its not a url
//                 backgroundSize: "100% 100%",
//                 backgroundAttachment: "fixed",
//                 height: scrollInfo[i] * 100 + "%",
//                 width: "100%",
//                 zIndex: 0,
//             }}></div>)
//         }

//         if (softTransitions[i] > 0) {
//             let timing = scrollInfo[i]
//             transitionTimings.push(timing - softTransitions[i], timing)
//             transitionValues.push(0, 1)
//         }

//         fromTop += scrollInfo[i]
//     }

//     const transitionOpacity = useTransform(scrollYProgress, transitionTimings, transitionValues)
//     const tO = useMotionTemplate`${transitionOpacity}`
//     useMotionValueEvent(transitionOpacity, "change", latest => { tO.set(Math.round(latest * 100) / 100); console.log(Math.round(latest * 100) / 100) })

//     // let opacity = opacityDiff
//     return (
//         <div style={{ width: "100%", height: "100%", position: "relative" }}>
//             {bgDivToReturn}
//             <motion.div style={{
//                 backgroundColor: "#202020",
//                 height: "100%",
//                 width: "100%",
//                 opacity: tO,
//                 position: "fixed",
//                 zIndex: 0,
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0
//             }} />
//             {children}
//         </div>
//     )
// }

// function Backgrounds({ children, backgrounds, softTransitions, scrollInfo }) {

//     const { scrollYProgress } = useScroll()

//     let bgList = []
//     let fromTop = 0

//     let transitionTimings = []
//     let transitionValues = []

//     for (let i = 0; i < scrollInfo.length; i++) {
//         if (backgrounds[i][0] === "#") {
//             bgList.push(
//                 <div style={{
//                     position: "absolute",
//                     key: backgrounds[i] + i,
//                     backgroundColor: backgrounds[i],
//                     top: fromTop * 100 + "%",
//                     height: scrollInfo[i] * 100 + "%",
//                     width: "100%",
//                     zIndex: 0,
//                 }}></div>
//             )
//         } else {
//             bgList.push(
//                 <div style={{
//                     position: "absolute",
//                     key: backgrounds[i] + i,
//                     top: fromTop * 100 + "%",
//                     backgroundImage: "url(" + backgrounds[i] + ")",
//                     backgroundSize: "100% 100%",
//                     backgroundAttachment: "fixed",
//                     height: scrollInfo[i] * 100 + "%",
//                     width: "100%",
//                     zIndex: 0,
//                 }}></div>
//             )
//         }

//         if (softTransitions[i] > 0) {
//             let timing = scrollInfo[i]
//             transitionTimings.push(timing - softTransitions[i], timing)
//             transitionValues.push(0, 1)
//         }

//         fromTop += scrollInfo[i]
//     }

//     const transitionOpacity = useTransform(scrollYProgress, transitionTimings, transitionValues)
//     const tO = useMotionTemplate`${transitionOpacity}`
//     useMotionValueEvent(transitionOpacity, "change", latest => { tO.set(Math.round(latest * 100) / 100); console.log(Math.round(latest * 100) / 100) })

//     // let opacity = opacityDiff
//     return (
//         <div style={{ width: "100%", height: "100%", position: "relative" }}>
//             {bgList}
//             <motion.div style={{
//                 backgroundColor: "#202020",
//                 height: "100%",
//                 width: "100%",
//                 opacity: tO,
//                 position: "fixed",
//                 zIndex: 0,
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0
//             }} />
//             {children}
//         </div>
//     )
// }