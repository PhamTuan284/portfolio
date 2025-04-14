import React, { useEffect, useRef, useState } from 'react';
import './AnimationCase.scss';

const AnimationCase: React.FC = () => {
  const [visibleAnimations, setVisibleAnimations] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const allAnimations = [
    {
      id: 'fade',
      title: 'Fade Animation',
      description: 'Smooth fade in/out transition effect',
      className: 'fade-animation'
    },
    {
      id: 'slide',
      title: 'Slide Animation',
      description: 'Horizontal sliding motion effect',
      className: 'slide-animation'
    },
    {
      id: 'bounce',
      title: 'Bounce Animation',
      description: 'Bouncing effect with easing',
      className: 'bounce-animation'
    },
    {
      id: 'rotate',
      title: 'Rotate Animation',
      description: '360-degree rotation effect',
      className: 'rotate-animation'
    },
    {
      id: 'scale',
      title: 'Scale Animation',
      description: 'Smooth scaling effect',
      className: 'scale-animation'
    },
    {
      id: 'flip',
      title: 'Flip Animation',
      description: '3D flip card effect',
      className: 'flip-animation'
    },
    {
      id: 'pulse',
      title: 'Pulse Animation',
      description: 'Heartbeat-like pulsing effect',
      className: 'pulse-animation'
    },
    {
      id: 'shake',
      title: 'Shake Animation',
      description: 'Vibrating shake effect',
      className: 'shake-animation'
    },
    {
      id: 'wave',
      title: 'Wave Animation',
      description: 'Wavy motion effect',
      className: 'wave-animation'
    },
    {
      id: 'float',
      title: 'Float Animation',
      description: 'Gentle floating up and down',
      className: 'float-animation'
    },
    {
      id: 'swing',
      title: 'Swing Animation',
      description: 'Pendulum-like swinging motion',
      className: 'swing-animation'
    },
    {
      id: 'rainbow',
      title: 'Rainbow Animation',
      description: 'Color transition through rainbow colors',
      className: 'rainbow-animation'
    },
    {
      id: 'glow',
      title: 'Glow Animation',
      description: 'Pulsing glow effect with shadow',
      className: 'glow-animation'
    },
    {
      id: 'skew',
      title: 'Skew Animation',
      description: 'Diagonal distortion effect',
      className: 'skew-animation'
    },
    {
      id: 'tilt',
      title: '3D Tilt Animation',
      description: 'Interactive 3D tilt effect',
      className: 'tilt-animation'
    },
    {
      id: 'squash-stretch',
      title: 'Squash & Stretch',
      description: 'Classic animation principle with elastic effect',
      className: 'squash-stretch-animation'
    },
    {
      id: 'wobble',
      title: 'Wobble Effect',
      description: 'Playful wobbling motion with rotation',
      className: 'wobble-animation'
    },
    {
      id: 'jelly',
      title: 'Jelly Effect',
      description: 'Squishy, elastic deformation effect',
      className: 'jelly-animation'
    },
    {
      id: 'pop',
      title: 'Pop Effect',
      description: 'Quick scale and fade animation',
      className: 'pop-animation'
    },
    {
      id: 'squeeze',
      title: 'Squeeze Effect',
      description: 'Horizontal compression effect',
      className: 'squeeze-animation'
    },
    {
      id: 'twist',
      title: 'Twist Effect',
      description: 'Rotating scale transformation',
      className: 'twist-animation'
    },
    {
      id: 'morph',
      title: 'Morph Effect',
      description: 'Shape-changing transformation',
      className: 'morph-animation'
    },
    {
      id: 'bounce-physics',
      title: 'Physics Bounce',
      description: 'Realistic bouncing with gravity',
      className: 'bounce-physics-animation'
    },
    {
      id: 'pulse-color',
      title: 'Color Pulse',
      description: 'Pulsing effect with color transitions',
      className: 'pulse-color-animation'
    },
    {
      id: 'ripple',
      title: 'Ripple Effect',
      description: 'Expanding circular wave effect',
      className: 'ripple-animation'
    },
    {
      id: 'blur',
      title: 'Blur Effect',
      description: 'Dynamic focus and blur transitions',
      className: 'blur-animation'
    },
    {
      id: 'spin-3d',
      title: '3D Spin',
      description: 'Three-dimensional rotation effect',
      className: 'spin-3d-animation'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && visibleAnimations < allAnimations.length) {
          setIsLoading(true);
          // Simulate loading delay
          setTimeout(() => {
            setVisibleAnimations((prev) => Math.min(prev + 6, allAnimations.length));
            setIsLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visibleAnimations, isLoading, allAnimations.length]);

  const displayedAnimations = allAnimations.slice(0, visibleAnimations);

  return (
    <div className="animation-case">
      <h2>Animation Examples</h2>
      <p className="description">
        Hover over the cards to see different animation effects
      </p>

      <div className="animation-grid">
        {displayedAnimations.map(animation => (
          <div key={animation.id} className="animation-card">
            <h3>{animation.title}</h3>
            <p>{animation.description}</p>
            <div className={`animation-demo ${animation.className}`}>
              <div className="animation-content">
                Demo
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleAnimations < allAnimations.length && (
        <div ref={observerTarget} className="loading-indicator">
          {isLoading ? 'Loading more animations...' : ''}
        </div>
      )}
    </div>
  );
};

export default AnimationCase; 