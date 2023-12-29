import { useEffect } from 'react';

export default function RotatingSphere() {

    useEffect(() => {
        const rotatingsphere = document.createElement('div');
        rotatingsphere.className = 'ripple-background';
    
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
    
        rotatingsphere.append(...circles);
        document.body.appendChild(rotatingsphere);
    
        const rotateAnimation = `
          @keyframes ripple {
            0% {
              transform: scale(0.3);
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
        styleSheet.innerHTML = rotateAnimation;
        document.head.appendChild(styleSheet);
    
        return () => {
          document.body.removeChild(rotatingsphere);
          document.head.removeChild(styleSheet);
        };
      }, []);
    
      return null;
  }