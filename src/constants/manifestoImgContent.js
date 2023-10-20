import { useState, useEffect } from 'react';

export const useImageLoader = () => {
  const [MANIFESTO_IMAGES, setManifestoImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const manifesto_gradient = (await import('../images/manifesto/manifesto_gradient.png')).default;
        const manifesto_01 = (await import('../images/manifesto/manifesto_01.png')).default;
        const manifesto_02 = (await import('../images/manifesto/manifesto_02.png')).default;
        const avocado_toast = (await import('../images/manifesto/avocado_toast.png')).default;
        const avocado_1 = (await import('../images/manifesto/avocado-1.png')).default;
        const avocado_2 = (await import('../images/manifesto/avocado-2.png')).default;
        const avocado_3 = (await import('../images/manifesto/avocado-3.png')).default;
        const avocado_4 = (await import('../images/manifesto/avocado-4.png')).default;

        const imageObject = {
          manifesto_gradient,
          manifesto_01,
          manifesto_02,
          avocado_toast,
          avocado_1,
          avocado_2,
          avocado_3,
          avocado_4
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
