import { useState, useEffect } from 'react';

export const useImageLoader = () => {
  const [MANIFESTO_IMAGES, setManifestoImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      try {
        const manifesto_gradient = (await import('../images/manifesto/manifesto_gradient.webp')).default;
        const manifesto_01 = (await import('../images/manifesto/manifesto_01.webp')).default;
        const manifesto_02 = (await import('../images/manifesto/manifesto_02.webp')).default;
        const avocado_toast = (await import('../images/manifesto/avocado_toast.webp')).default;
        const avocado_1 = (await import('../images/manifesto/avocado-1.webp')).default;
        const avocado_2 = (await import('../images/manifesto/avocado-2.webp')).default;
        const avocado_3 = (await import('../images/manifesto/avocado-3.webp')).default;
        const avocado_4 = (await import('../images/manifesto/avocado-4.webp')).default;
        const galileo = ((await import('../images/manifesto/galileo.webp'))).default;
        const robot_beach = ((await import('../images/manifesto/robot_beach.webp'))).default;
        const cute_robot1 = ((await import('../images/manifesto/cute_robot1.webp'))).default;
        const tin_robot3 = ((await import('../images/manifesto/tin_robot3.webp'))).default;
        const orange_robot1 = ((await import('../images/manifesto/orange_robot1.webp'))).default;
        const tom_gif = ((await import('../images/manifesto/tom_gif.gif'))).default;
        const avocado_mobile = ((await import('../images/manifesto/avocado_mobile.webp'))).default;

        const imageObject = {
          manifesto_gradient,
          manifesto_01,
          manifesto_02,
          avocado_toast,
          avocado_1,
          avocado_2,
          avocado_3,
          avocado_4,
          galileo,
          robot_beach,
          cute_robot1,
          tin_robot3,
          orange_robot1,
          tom_gif,
          avocado_mobile
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
