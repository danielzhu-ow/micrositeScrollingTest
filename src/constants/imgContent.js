import { useState, useEffect } from 'react';

export const useNamingImageLoader = () => {
  const [NAMING_IMAGES, setNAMING_IMAGES] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const naming_gradient = (await import('../images/naming/namingGradient.png')).default;
        const naming_01 = (await import('../images/naming/naming_01.png')).default;
        const naming_02 = (await import('../images/naming/naming_02.png')).default;
        const verizon = (await import('../images/naming/verizon.png')).default;
        const sprite = (await import('../images/naming/sprite.png')).default;
        const dino_day = (await import('../images/naming/dino_day.png')).default;
        const dino_night = (await import('../images/naming/dino_night.png')).default;
        const firmi = (await import ('../images/naming/firmi.png')).default;
        const cute_robot_idle = (await import ('../images/naming/cute_robot2.png')).default;
        const cute_robot_think = (await import ('../images/naming/cute_robot.gif')).default;
        const duracell = (await import ('../images/experiments/duracell.png')).default;
        const off = (await import ('../images/experiments/off.png')).default;
        const experiment_01 = (await import ('../images/experiments/experiment_01.png')).default;
        const experiment_02 = (await import ('../images/experiments/experiment_02.png')).default;
        const experiment_03 = (await import ('../images/experiments/experiment_03.png')).default;
        const orange_robot1 = (await import ('../images/experiments/orange_robot1.png')).default;
        const tin_robot3 = (await import ('../images/experiments/tin_robot3.png')).default;
        const cute_robot = (await import ('../images/experiments/cute_robot.png')).default;
        const mobile_duracell_off = (await import ('../images/experiments/mobile_duracell_off.png')).default;
        const mobile_sprite_verizon = (await import ('../images/naming/mobileSpriteVerizon.png')).default;
        const toy_pile = (await import ('../images/naming/toyPile.png')).default;
        const hotdog = (await import ('../images/naming/hotdog.png')).default;

        const imageObject = {
          naming_gradient,
          naming_01,
          naming_02,
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
          cute_robot,
          orange_robot1,
          tin_robot3,
          mobile_duracell_off,
          mobile_sprite_verizon,
          toy_pile,
          hotdog,
        };

        setNAMING_IMAGES(imageObject);
      } catch (error) {
        console.error('Error importing images:', error);
      }
    };

    importImages();
  }, []); 

  return NAMING_IMAGES;
};
