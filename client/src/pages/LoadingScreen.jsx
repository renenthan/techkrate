import React from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  React.useEffect(() => {
    // Animation to fade out the loading screen after 1 second
    const tl = gsap.timeline();
    tl.to('.loading-screen', {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        document.querySelector('.loading-screen').style.display = 'none';
      },
    });
  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
      <div className="loader">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
