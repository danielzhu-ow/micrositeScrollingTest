import { useState } from 'react';
import { motion } from "framer-motion"

import { Background } from '../interactions/Background'
import { TransformingContent, ImgBox } from '../interactions/TransformingContent'
import { TransformingTextBox } from '../interactions/TransformingTextBox';
import { useHotDogImageLoader } from '../constants/hotDogImg';
import { OpacityContent, OpacitySubheading } from '../interactions/OpacityContent';
import { sizes, devices } from '../constants/devices';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { getImageByKey } from '../constants/imgContent.js';

export { HotDogSection }

const ContactButton = styled.button`
    margin: 0;
    width: 20rem;
    height: 5.9rem;

    background-color: white;
    border: 1px black solid;
    border-radius: 0.5rem;

    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        width: 13rem;
        height: 5rem;
        font-size: 1.4rem;
    }
`;

const ExpandingContactButton = styled.button`
    margin: 0;
    width: 100%;
    height: 5.9rem;

    background-color: white;
    border: 1px black solid;
    border-radius: 0.5rem;

    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        height: 5rem;
        font-size: 1.4rem;
    }
`;

const ArticleSubHeading = styled.h2`
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: left;

    max-width: 75rem;
    margin: 10rem auto 2rem auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
    }
`;

const RestaurantContainer = styled.div`
  background-color: white;
  border: 1px black solid;
  border-radius: 0.5rem;
  max-width: 75rem;
  padding: 3.2rem;
`;

const RightColumn = styled.div`
  height: fit-contents;
  position: absolute;
  top: 33%;
  transform: translateY(-50%);
`

const RestaurantName = styled.h3`
  font-family: 'Noe Display Medium';
  font-weight: 500;
  font-size: 3.2rem;
  margin: 0;
`;

const RestaurantDesc = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  margin: 1.6rem 0 3.2rem 0;
`;

const DoubleColumn = styled.div`
    display: grid;
    grid-template-columns: 40% 52%;
    column-gap: 0%;
    max-width: 110rem;
    margin: auto;
    padding: 3.2rem;
    text-align: center;

    @media only screen and (max-width: ${sizes.tablet}) {
        max-width: 36rem;
        grid-template-columns: 100%;
    }
`

const InsideColumn = styled.div`
  width: 100%;
  column-count: 2;
  column-gap: 3.2rem';

  @media only screen and (max-width: ${sizes.tablet}) {
    column-count: 1;
}
`

function HotDogSection({ sectionHeights, adjustedTimings }) {
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

  // const isMobile = useMediaQuery({ query: devices.mobileL });
  const isTablet = useMediaQuery({ query: devices.tablet });

  const mobileToys = (
    <>
      <OpacityContent scrollInfo={adjustedTimings[6][1]} baseOpacity={0} child={
        <TransformingContent positions={[[0, 0, 0, -100], [-1, -1, -1, -1]]} scrollInfo={adjustedTimings[6][1]} alignment={['right', 'bottom']} child={
          <ImgBox url={getImageByKey("toy_pile")} displayDimensions={[50, 50]} rotate={0} />
        } />
      } />
    </>
  );

  const desktopToys = (
    <>
      <OpacityContent scrollInfo={adjustedTimings[6][3]} baseOpacity={1} child={
        <TransformingContent positions={[[-20, -20, -20, 40, 40, 40], [-100, -14, -14, -14, -14, 80]]} scrollInfo={adjustedTimings[6][2]} alignment={['right', 'bottom']} child={
          <ImgBox url={getImageByKey("shadow")} displayDimensions={[70, 70]} rotate={0} />
        } />
      } />
      <OpacityContent scrollInfo={adjustedTimings[6][3]} baseOpacity={1} child={
        <TransformingContent positions={[[7, 7, 7, 60, 60, 60], [-100, 14, 14, 14, 14, 100]]} scrollInfo={adjustedTimings[6][2]} alignment={['right', 'bottom']} child={
          <ImgBox url={getImageByKey("hotdog")} displayDimensions={[33, 70]} rotate={0} />
        } />
      } />
      <OpacityContent scrollInfo={adjustedTimings[6][1]} baseOpacity={1} child={
        <TransformingContent positions={[[0, 0, 0, -100], [-100, -1, -1, -1]]} scrollInfo={adjustedTimings[6][1]} alignment={['right', 'bottom']} child={
          <ImgBox url={getImageByKey("toy_pile")} displayDimensions={[50, 70]} rotate={0} />
        } />
      } />
    </>
  );

  const clickableModule = (
    <RestaurantContainer>
      <RestaurantName>{selectedOption}</RestaurantName>
      <RestaurantDesc>{optionDescriptions[selectedOption]}</RestaurantDesc>
      <img
        src={optionImages[selectedOption]}
        alt={selectedOption}
        style={{ width: "100%", marginBottom: '3.2rem' }}
      />
      <div style={{ width: '100%', textAlign: 'center' }}>
        <motion.div whileTap={{ scale: 0.95 }} onClick={handleStartOver}>
          <ContactButton>Start Over</ContactButton>
        </motion.div>
      </div>
    </RestaurantContainer>
  );

  return (
    <>
      <Background background={getImageByKey("naming_gradient")} height={sectionHeights[6]} />
      {/* ANIMATION IN */}
      <TransformingContent positions={[[15, 15, 15, 15], [120, 15, 15, 15]]} scrollInfo={adjustedTimings[6][1]} alignment={['left', 'top']} child={
        <OpacitySubheading scrollInfo={adjustedTimings[6][1]} dark={false} simpleFade={true} text={[["So, it's time to play."]]} />
      } />

      {isTablet ? mobileToys : desktopToys}

      <TransformingTextBox positions={[100, 0, 0, -120]} doubled scrollInfo={adjustedTimings[6][0]} alignment={'top'} child={
        <DoubleColumn>
          <div></div>
          <motion.div className='hotDogMainCont' style={{ maxWidth: '68.2rem', textAlign: 'left', height: '100vh', position: 'relative' }}>
            <RightColumn>
              <ArticleSubHeading>{namingStarted ? selectedOption ? "Let me show you what my dreams are made of" : "How did I do? Pick your favorite" : "Let's name that gourmet hot dog restaurant you've always wanted to make"}</ArticleSubHeading>
              {namingStarted ? (selectedOption ? (clickableModule) : (<NamingButtons onOptionClick={handleOptionClick} />)) : (
                <motion.div whileTap={{ scale: 0.95 }} onClick={() => setNamingStarted(true)} disabled={namingStarted}>
                  <ContactButton> {namingStarted ? "NAMING STARTED" : "START NAMING"} </ContactButton>
                </motion.div>
              )}
            </RightColumn>
          </motion.div>
        </DoubleColumn >} />
    </>
  );
}

const generateRandomHotdogImage = (images) => {
  const keys = Object.keys(images);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return images[randomKey];
};

const NamingButtons = ({ onOptionClick }) => {
  const option1 = ["Crafty Weenies", "Doggbite", "Dog Days Delight"];
  const option2 = ["Savvy Franks", "Gourmaust", "DoggieDaze"];

  return (
    <InsideColumn>
      <div>
        {option1.map((option, index) => (
          <motion.div key={index} whileHover={{ backgoundColor: '#202020' }} whileTap={{ scale: 0.9 }} onClick={() => onOptionClick(option)} style={{ marginBottom: '3.2rem' }}>
            <ExpandingContactButton style={{ maxWidth: '32.6rem' }}> {option} </ExpandingContactButton>
          </motion.div>))}
      </div>
      <div>
        {option2.map((option, index) => (
          <motion.div key={index} whileHover={{ backgoundColor: '#202020' }} whileTap={{ scale: 0.9 }} onClick={() => onOptionClick(option)} style={{ marginBottom: '3.2rem' }}>
            <ExpandingContactButton style={{ maxWidth: '32.6rem' }}> {option} </ExpandingContactButton>
          </motion.div>))}
      </div>
    </InsideColumn>
  );
}
