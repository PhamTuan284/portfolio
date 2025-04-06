import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './AnimationCase.scss';

const AnimationCase: React.FC = () => {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  const animations = [
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
    }
  ];

  return (
    <div className="animation-case">
      <h2>Animation Examples</h2>
      <p className="description">
        Click on the buttons below to see different animation effects
      </p>

      <div className="animation-grid">
        {animations.map(animation => (
          <div key={animation.id} className="animation-card">
            <h3>{animation.title}</h3>
            <p>{animation.description}</p>
            <div className={`animation-demo ${animation.className} ${activeAnimation === animation.id ? 'active' : ''}`}>
              <div className="animation-content">
                Demo
              </div>
            </div>
            <Button
              variant="primary"
              onClick={() => setActiveAnimation(activeAnimation === animation.id ? null : animation.id)}
              className="animation-button"
            >
              {activeAnimation === animation.id ? 'Stop' : 'Play'} Animation
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationCase; 