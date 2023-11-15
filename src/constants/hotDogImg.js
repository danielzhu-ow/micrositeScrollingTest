import { useState, useEffect } from 'react';

export const useHotDogImageLoader = () => {
  const [HOTDOG_IMAGES, setHOTDOG_IMAGES] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const imageObject = {};
        for (let n = 1; n <= 33; n++) {
          const imageName = `hotdog_${n}.webp`;
          const image = (await import(`../images/hotdog/${imageName}`)).default;
          imageObject[`hotdog_${n}`] = image;
        }

        setHOTDOG_IMAGES(imageObject);
      } catch (error) {
        console.error('Error importing images:', error);
      }
    };

    importImages();
  }, []); 

  return HOTDOG_IMAGES;
};
