import { useState, useEffect } from 'react';

export const useImageLoader = () => {
  const [NamingIMAGES, setNamingIMAGES] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const cloudstair = (await import('../images/couldStair.png')).default;
        const cloud = (await import('../images/cloud.png')).default;
        const rect = (await import('../images/rect.png')).default;
        const gradientDefault = (await import('../images/gradientDefault.png')).default;
        const gifSpriteSheet = (await import('../images/gifSpriteSheet.png')).default;
        // const blur = (await import('../images/add-blur-from-nav.mp4')).default;

        const imageObject = {
          cloudstair,
          cloud,
          rect,
          gradientDefault, 
          gifSpriteSheet
        };

        setNamingIMAGES(imageObject);
      } catch (error) {
        console.error('Error importing images:', error);
      }
    };

    importImages();
  }, []); 

  return NamingIMAGES;
};
