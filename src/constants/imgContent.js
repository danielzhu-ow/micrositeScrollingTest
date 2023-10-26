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
        const cute_robot_think = (await import ('../images/naming/cute_robot3.png')).default;

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
          cute_robot_think
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
