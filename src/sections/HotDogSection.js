import { useState } from 'react';
import { motion } from "framer-motion"

import { Background, TransitionBackground } from '../interactions/Background'
import { TransformingContent, TransformingTextBox, ImgBox, VideoBox, ScalingImgBox, RotatingImgBox } from '../interactions/TransformingContent'
import { OpacityHeading, OpacityParagraph, OpacityList, OpacitySubheading } from '../interactions/OpacityContent';
import { FadingHeader } from "../interactions/FadingHeader"

import { useHotDogImageLoader } from '../constants/hotDogImg';

export { HotDogSection }

function HotDogSection({ images, sectionHeights, adjustedTimings}) {
  const HOTDOG_IMAGES = useHotDogImageLoader();

  const [namingStarted, setNamingStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const optionImages = {
    "Crafty Weenies": generateRandomHotdogImage(HOTDOG_IMAGES),
    "Doggbite": generateRandomHotdogImage(HOTDOG_IMAGES),
    "Dog Days Delight": generateRandomHotdogImage(HOTDOG_IMAGES),
    "Savvy Franks": generateRandomHotdogImage(HOTDOG_IMAGES),
    "Gourmaust": generateRandomHotdogImage(HOTDOG_IMAGES),
    "DoggieDaze": generateRandomHotdogImage(HOTDOG_IMAGES),
  };
  const optionDescriptions = {
    "Crafty Weenies": "Unleash your taste buds with artisanal hot dogs at Crafty Weenies. Experience a world of flavors, from classic comfort dogs to inventive, gourmet creations that'll satisfy your cravings like never before.",
    "Doggbite": "Sink your teeth into the ultimate hot dog experience at Doggbite. These gourmet dogs are designed to delight with their mouthwatering combinations and bold flavors that will leave you craving more.",
    "Dog Days Delight": "Step into a world of doggone deliciousness at Dog Days Delight. Savor every bite of their delectable hot dogs, each bursting with unique toppings and quality ingredients, making every day a delightful dog day.",
    "Savvy Franks": "Discover the art of the hot dog at Savvy Franks. With a menu full of thoughtfully crafted franks, this gourmet hotspot elevates the classic hot dog to a new level of sophistication and flavor.",
    "Gourmaust": "At Gourmaust, hot dogs meet haute cuisine. Indulge in a selection of premium hot dogs made with the finest ingredients and innovative toppings, setting the bar for gourmet hot dog perfection.",
    "DoggieDaze": "Embark on a flavor adventure at DoggieDaze, where gourmet hot dogs take center stage. These creatively curated dogs will transport your taste buds to new heights of delight, leaving you in a state of pure doggie daze.",
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleStartOver = () => {
    setNamingStarted(false);
    setSelectedOption(null);
  };

  return (
    <>
    <Background background={images.naming_gradient} height={sectionHeights[6]}/>
    <TransformingTextBox positions={[100, 30, 30, 30, -20]} scrollInfo={adjustedTimings[6][0]} alignment={'top'} child={
    <motion.div className='hotDogMainCont'> 
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
              style={{ width: "30%" }}
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
    </motion.div>} />
    </>
  );
}

const generateRandomHotdogImage = (images) => {
  const keys = Object.keys(images);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return images[randomKey];
};

const NamingButtons = ({ onOptionClick }) => {
  const options = ["Crafty Weenies", "Doggbite", "Dog Days Delight", "Savvy Franks", "Gourmaust", "DoggieDaze"];
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
