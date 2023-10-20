import { useState, useEffect } from 'react';

export const useImageLoader = () => {
  const [MANIFESTO_IMAGES, setManifestoImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const manifesto_gradient = (await import('../images/manifesto_gradient.png')).default;
        const manifesto_01 = (await import('../images/manifesto_01.png')).default;
        const manifesto_02 = (await import('../images/manifesto_02.png')).default;

        const imageObject = {
          manifesto_gradient,
          manifesto_01,
          manifesto_02
        };

        setManifestoImages(imageObject);
      } catch (error) {
        console.error('Error importing images:', error);
      }
    };

    importImages();
  }, []); 

  return MANIFESTO_IMAGES;
};
