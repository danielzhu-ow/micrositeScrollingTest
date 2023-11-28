// import { useState, useEffect } from 'react';
import naming_gradient from '../images/naming/namingGradient.webp'
import naming_01 from '../images/naming/naming_01.webp'
import naming_02 from '../images/naming/naming_02.webp'
import naming_03 from '../images/naming/naming_03.webp'
import verizon from '../images/naming/verizon.webp'
import sprite from '../images/naming/sprite.webp'
import dino_day from'../images/naming/dino_day.webp'
import dino_night from '../images/naming/dino_night.webp'
import firmi from '../images/naming/firmi.webp'
import cute_robot_idle from '../images/naming/cute_robot2.webp'
import cute_robot_think from '../images/naming/cute_robot.gif'
import duracell from '../images/experiments/duracell.webp'
import off from '../images/experiments/off.webp'
import experiment_01 from '../images/experiments/experiment_01.webp'
import experiment_02 from '../images/experiments/experiment_02.webp'
import experiment_03 from '../images/experiments/experiment_03.webp'
import orange_robot1 from '../images/experiments/orange_robot1.webp'
import tin_robot3 from '../images/experiments/tin_robot3.webp'
import cute_robot from '../images/experiments/cute_robot.webp'
import mobile_duracell_off from '../images/experiments/mobile_duracell_off.webp'
import mobile_sprite_verizon from '../images/naming/mobileSpriteVerizon.webp'
import toy_pile from '../images/naming/toyPile.webp'
import hotdog from'../images/naming/hotdog.webp'
import mask from '../images/naming/mask.png'
import shadow from '../images/naming/shadow.webp'
import headerShadeExperiment from '../images/naming/headerShadeExperiment.webp'
import headerShadeNaming from '../images/naming/headerShadeNaming.webp'

export {getImageByKey}

const imagesNaming = {
  naming_gradient,
  naming_01,
  naming_02,
  naming_03,
  verizon,
  sprite,
  dino_day,
  dino_night,
  firmi,
  cute_robot_idle,
  cute_robot_think,
  duracell,
  off,
  experiment_01,
  experiment_02,
  experiment_03,
  orange_robot1,
  tin_robot3,
  cute_robot,
  mobile_duracell_off,
  mobile_sprite_verizon,
  toy_pile,
  hotdog,
  mask,
  shadow,
  headerShadeExperiment,
  headerShadeNaming,
};

function getImageByKey(key) {
  // console.log(key)
  return imagesNaming[key]
}


// const useNamingImageLoaderOG = () => {
//   const [NAMING_IMAGES, setNAMING_IMAGES] = useState({});

//   useEffect(() => {
//     const importImages = async () => {
//       try {
//         const naming_gradient = (await import('../images/naming/namingGradient.webp')).default;
//         const naming_01 = (await import('../images/naming/naming_01.webp')).default;
//         const naming_02 = (await import('../images/naming/naming_02.webp')).default;
//         const naming_03 = (await import('../images/naming/naming_03.webp')).default;
//         const verizon = (await import('../images/naming/verizon.webp')).default;
//         const sprite = (await import('../images/naming/sprite.webp')).default;
//         const dino_day = (await import('../images/naming/dino_day.webp')).default;
//         const dino_night = (await import('../images/naming/dino_night.webp')).default;
//         const firmi = (await import ('../images/naming/firmi.webp')).default;
//         const cute_robot_idle = (await import ('../images/naming/cute_robot2.webp')).default;
//         const cute_robot_think = (await import ('../images/naming/cute_robot.gif')).default;
//         const duracell = (await import ('../images/experiments/duracell.webp')).default;
//         const off = (await import ('../images/experiments/off.webp')).default;
//         const experiment_01 = (await import ('../images/experiments/experiment_01.webp')).default;
//         const experiment_02 = (await import ('../images/experiments/experiment_02.webp')).default;
//         const experiment_03 = (await import ('../images/experiments/experiment_03.webp')).default;
//         const orange_robot1 = (await import ('../images/experiments/orange_robot1.webp')).default;
//         const tin_robot3 = (await import ('../images/experiments/tin_robot3.webp')).default;
//         const cute_robot = (await import ('../images/experiments/cute_robot.webp')).default;
//         const mobile_duracell_off = (await import ('../images/experiments/mobile_duracell_off.webp')).default;
//         const mobile_sprite_verizon = (await import ('../images/naming/mobileSpriteVerizon.webp')).default;
//         const toy_pile = (await import ('../images/naming/toyPile.webp')).default;
//         const hotdog = (await import ('../images/naming/hotdog.webp')).default;

//         const imageObject = {
//           naming_gradient,
//           naming_01,
//           naming_02,
//           naming_03,
//           verizon,
//           sprite,
//           dino_day,
//           dino_night,
//           firmi, 
//           cute_robot_idle,
//           cute_robot_think,
//           duracell,
//           off,
//           experiment_01,
//           experiment_02,
//           experiment_03,
//           cute_robot,
//           orange_robot1,
//           tin_robot3,
//           mobile_duracell_off,
//           mobile_sprite_verizon,
//           toy_pile,
//           hotdog,
//         };

//         setNAMING_IMAGES(imageObject);
//       } catch (error) {
//         console.error('Error importing images:', error);
//       }
//     };

//     importImages();
//   }, []); 

//   return NAMING_IMAGES;
// };


