import { useEffect } from 'react';

const RippleBackground = () => {
  useEffect(() => {
    const rippleBackground = document.createElement('div');
    rippleBackground.className = 'ripple-background';
    rippleBackground.style.background = '#7F848F';

    const circles = Array.from({ length: 5 }, (_, index) => {
      const circle = document.createElement('div');
      circle.className = `circle ${index === 0 ? 'xxlarge' : index === 1 ? 'xlarge' : index === 2 ? 'large' : index === 3 ? 'medium' : 'small'} shade${index + 1}`;
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.background = '#7F848F';
      circle.style.animation = 'ripple 15s infinite';
      circle.style.boxShadow = '0px 0px 2px 0px #508fb9';
      circle.style.width = `${200 + 200 * index}px`;
      circle.style.height = `${200 + 200 * index}px`;
      circle.style.left = `${-100 - 100 * index}px`;
      circle.style.top = `${-100 - 100 * index}px`;
      circle.style.opacity = `${0.2 + index * 0.1}`;
      return circle;
    });

    rippleBackground.append(...circles);
    document.body.appendChild(rippleBackground);

    const rippleAnimation = `
      @keyframes ripple {
        0% {
          transform: scale(0.2);
        }
        50% {
          transform: scale(0.4);
        }
        100% {
          transform: scale(0.2);
        }
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = rippleAnimation;
    document.head.appendChild(styleSheet);

    return () => {
      document.body.removeChild(rippleBackground);
      document.head.removeChild(styleSheet);
    };
  }, []);

  return null;
};



export default RippleBackground;
