// import universal
import { useRef } from 'react'
import { styled } from 'styled-components';
import { useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useMotionTemplate, motion } from "framer-motion"
import { userRef } from 'react'

// import Styles
import { ArticleHeaderBlock, ArticleBodyBlock } from '../ArticleStyles';

// import interactions
import { ScrollingGif } from "../interactions/ScrollingGif"
import { Background } from '../interactions/Background'
import { TransformingContent, ImgBox, BackgroundImgBox } from '../interactions/TransformingContent'
import { OpacityContent } from '../interactions/OpacityContent';
import { ScrollingMovie } from '../interactions/ScrollingMovie'
import { FadingHeader } from "../interactions/FadingHeader"

export { HotDogSection }

function HotDogSection({ images }) {
    const [namingStarted, setNamingStarted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const optionImages = {
      Option1: "image1.jpg",
      Option2: "image2.jpg",
      Option3: "image3.jpg",
      Option4: "image4.jpg",
      Option5: "image5.jpg",
      Option6: "image6.jpg",
    };
    const optionDescriptions = {
      Option1: "description 1",
      Option2: "description 2",
      Option3: "description 3",
      Option4: "description 4",
      Option5: "description 5",
      Option6: "description 6",
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    const handleStartOver = () => {
      setNamingStarted(false);
      setSelectedOption(null);
    };
  
    return (
      <div className='hotDogMainCont'>
        <h1>
          {namingStarted
            ? selectedOption
              ? "Let me show you what my dreams are made of"
              : "How did I do? Pick your favorite"
            : "Let’s name that gourmet hot dog restaurant you’ve always wanted to make"}
        </h1>
        {namingStarted ? (
          selectedOption ? (
            <div>
              <h2>{selectedOption}</h2>
              <h3>{optionDescriptions[selectedOption]}</h3>
              <img
                src={optionImages[selectedOption]}
                alt={selectedOption}
                style={{ width: "100%" }}
              />
            </div>
          ) : (
            <NamingButtons onOptionClick={handleOptionClick} />
          )
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setNamingStarted(true)}
            disabled={namingStarted}
          >
            {namingStarted ? "Naming Started" : "Start Naming"}
          </motion.button>
        )}
        {selectedOption && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleStartOver}
          >
            Start Over
          </motion.button>
        )}
      </div>
    );
  }
  
  const NamingButtons = ({ onOptionClick }) => {
    const options = ["Crafty Weenies", "Doggbite", "Dog Days Delight", "savvy franks", "gourmaust", "generate more"];
  
    return (
      <div>
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onOptionClick(option)}
          >
            {option}
          </motion.button>
        ))}
      </div>
    );
  }