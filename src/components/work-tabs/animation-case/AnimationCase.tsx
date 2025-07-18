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
    },
    {
      id: 'glitch',
      title: 'Glitch Effect',
      description: 'Digital distortion and glitch effect',
      className: 'glitch-animation'
    },
    {
      id: 'float-3d',
      title: '3D Float',
      description: 'Floating effect with 3D parallax',
      className: 'float-3d-animation'
    },
    {
      id: 'morph-svg',
      title: 'SVG Morph',
      description: 'Smooth shape morphing with SVG paths',
      className: 'morph-svg-animation'
    },
    {
      id: 'neon-glow',
      title: 'Neon Glow',
      description: 'Electric neon sign effect with pulsing glow',
      className: 'neon-glow-animation'
    },
    {
      id: 'matrix-rain',
      title: 'Matrix Rain',
      description: 'Digital rain effect inspired by The Matrix',
      className: 'matrix-rain-animation'
    },
    {
      id: 'hologram',
      title: 'Hologram',
      description: 'Futuristic holographic display effect',
      className: 'hologram-animation'
    },
    {
      id: 'fire',
      title: 'Fire Effect',
      description: 'Realistic flame animation with glowing embers',
      className: 'fire-animation'
    },
    {
      id: 'galaxy',
      title: 'Galaxy Effect',
      description: 'Cosmic space animation with twinkling stars',
      className: 'galaxy-animation'
    },
    {
      id: 'quantum-tunnel',
      title: 'Quantum Tunnel',
      description: 'Futuristic tunnel effect with particle movement',
      className: 'quantum-tunnel-animation'
    },
    {
      id: 'circuit',
      title: 'Circuit Effect',
      description: 'Animated circuit board with flowing electricity',
      className: 'circuit-animation'
    },
    {
      id: 'water',
      title: 'Water Effect',
      description: 'Realistic water surface with ripples and reflections',
      className: 'water-animation'
    },
    {
      id: 'lightning',
      title: 'Lightning Effect',
      description: 'Electric discharge with crackling energy',
      className: 'lightning-animation'
    },
    {
      id: 'portal',
      title: 'Portal Effect',
      description: 'Swirling vortex with dimensional distortion',
      className: 'portal-animation'
    },
    {
      id: 'crystal',
      title: 'Crystal Effect',
      description: 'Prismatic light refraction with sparkling facets',
      className: 'crystal-animation'
    },
    {
      id: 'smoke',
      title: 'Smoke Effect',
      description: 'Swirling smoke particles with dynamic movement',
      className: 'smoke-animation'
    },
    {
      id: 'lava',
      title: 'Lava Effect',
      description: 'Molten rock with bubbling and flowing animation',
      className: 'lava-animation'
    },
    {
      id: 'rainbow',
      title: 'Rainbow Effect',
      description: 'Vibrant color spectrum with flowing gradients',
      className: 'rainbow-animation'
    },
    {
      id: 'aurora',
      title: 'Aurora Effect',
      description: 'Northern lights with ethereal color waves',
      className: 'aurora-animation'
    },
    {
      id: 'storm',
      title: 'Storm Effect',
      description: 'Dynamic weather with lightning and rain',
      className: 'storm-animation'
    },
    {
      id: 'nebula',
      title: 'Nebula Effect',
      description: 'Cosmic cloud with swirling colors',
      className: 'nebula-animation'
    },
    {
      id: 'ocean',
      title: 'Ocean Effect',
      description: 'Deep sea with waves and bubbles',
      className: 'ocean-animation'
    },
    {
      id: 'desert',
      title: 'Desert Effect',
      description: 'Sandy dunes with heat waves',
      className: 'desert-animation'
    },
    {
      id: 'jungle',
      title: 'Jungle Effect',
      description: 'Lush rainforest with dynamic foliage',
      className: 'jungle-animation'
    },
    {
      id: 'arctic',
      title: 'Arctic Effect',
      description: 'Frozen landscape with snow and ice',
      className: 'arctic-animation'
    },
    {
      id: 'volcano',
      title: 'Volcano Effect',
      description: 'Erupting volcano with lava and smoke',
      className: 'volcano-animation'
    },
    {
      id: 'space',
      title: 'Space Effect',
      description: 'Cosmic void with stars and planets',
      className: 'space-animation'
    },
    {
      id: 'underwater',
      title: 'Underwater Effect',
      description: 'Deep sea with marine life and bubbles',
      className: 'underwater-animation'
    },
    {
      id: 'mountain',
      title: 'Mountain Effect',
      description: 'Majestic peaks with clouds and mist',
      className: 'mountain-animation'
    },
    {
      id: 'cloud',
      title: 'Cloud Effect',
      description: 'Floating clouds with dynamic movement',
      className: 'cloud-animation'
    },
    {
      id: 'forest',
      title: 'Forest Effect',
      description: 'Dense woodland with swaying trees',
      className: 'forest-animation'
    },
    {
      id: 'sunset',
      title: 'Sunset Effect',
      description: 'Vibrant sunset with color transitions',
      className: 'sunset-animation'
    },
    {
      id: 'cosmic',
      title: 'Cosmic Effect',
      description: 'Deep space with colorful nebulae and stardust',
      className: 'cosmic-animation'
    },
    {
      id: 'waterfall',
      title: 'Waterfall Effect',
      description: 'Cascading water with mist and splashes',
      className: 'waterfall-animation'
    },
    {
      id: 'wind',
      title: 'Wind Effect',
      description: 'Dynamic air currents with swirling patterns',
      className: 'wind-animation'
    },
    {
      id: 'crystal-cave',
      title: 'Crystal Cave Effect',
      description: 'Glowing crystals with prismatic light effects',
      className: 'crystal-cave-animation'
    },
    {
      id: 'northern-lights',
      title: 'Northern Lights Effect',
      description: 'Aurora borealis with flowing color waves',
      className: 'northern-lights-animation'
    },
    {
      id: 'sandstorm',
      title: 'Sandstorm Effect',
      description: 'Swirling desert winds with sand particles',
      className: 'sandstorm-animation'
    },
    {
      id: 'moonlight',
      title: 'Moonlight Effect',
      description: 'Serene night scene with glowing moon and subtle light effects',
      className: 'moonlight-animation'
    },
    {
      id: 'meteor-shower',
      title: 'Meteor Shower',
      description: 'Beautiful night sky with falling stars effect',
      className: 'meteor-shower-animation'
    },
    {
      id: 'rainbow-wave',
      title: 'Rainbow Wave',
      description: 'Combined wave motion with rainbow color transitions',
      className: 'rainbow-wave-animation'
    },
    {
      id: 'quantum-tunnel',
      title: 'Quantum Tunnel',
      description: '3D tunnel effect with glowing particles',
      className: 'quantum-tunnel-animation'
    },
    {
      id: 'holographic-interface',
      title: 'Holographic Interface',
      description: 'Futuristic hologram with scan lines and glow effects',
      className: 'holographic-interface-animation'
    },
    {
      id: 'time-warp',
      title: 'Time Warp Effect',
      description: 'Temporal distortion with ripple and blur effects',
      className: 'time-warp-animation'
    },
    {
      id: 'pixelate',
      title: 'Pixelate Effect',
      description: 'Retro pixelation transition effect',
      className: 'pixelate-animation'
    },
    {
      id: 'neon-pulse',
      title: 'Neon Pulse Effect',
      description: 'Vibrant neon glow with pulsing animation',
      className: 'neon-pulse-animation'
    },
    {
      id: 'glitch-scan',
      title: 'Glitch Scan Effect',
      description: 'Digital glitch with scanning line distortion',
      className: 'glitch-scan-animation'
    },
    {
      id: 'digital-rain',
      title: 'Digital Rain Effect',
      description: 'Matrix-style falling characters with glowing trails',
      className: 'digital-rain-animation'
    },
    {
      id: 'energy-field',
      title: 'Energy Field Effect',
      description: 'Pulsing force field with electric arcs and particle systems',
      className: 'energy-field-animation'
    },
    {
      id: 'data-stream',
      title: 'Data Stream Effect',
      description: 'Flowing digital data with binary code and network connections',
      className: 'data-stream-animation'
    },
    {
      id: 'plasma-ball',
      title: 'Plasma Ball Effect',
      description: 'Electric plasma with arcing lightning and energy tendrils',
      className: 'plasma-ball-animation'
    },
    {
      id: 'crystal-resonance',
      title: 'Crystal Resonance Effect',
      description: 'Harmonic vibration with crystalline sound waves and frequency patterns',
      className: 'crystal-resonance-animation'
    },
    {
      id: 'dream-sequence',
      title: 'Dream Sequence Effect',
      description: 'Surreal floating elements with soft transitions and ethereal glow',
      className: 'dream-sequence-animation'
    },
    {
      id: 'neural-network',
      title: 'Neural Network Effect',
      description: 'Artificial intelligence visualization with connecting nodes and data flow',
      className: 'neural-network-animation'
    },
    {
      id: 'origami-fold',
      title: 'Origami Fold Effect',
      description: 'Paper folding animation with crisp edges and unfolding transitions',
      className: 'origami-fold-animation'
    },
    {
      id: 'prism-refraction',
      title: 'Prism Refraction',
      description: 'Light beam splits into a spectrum of colors with refractive motion',
      className: 'prism-refraction-animation'
    },
    {
      id: 'magnetic-field',
      title: 'Magnetic Field Effect',
      description: 'Dynamic magnetic force lines with particle attraction and repulsion',
      className: 'magnetic-field-animation'
    },
    {
      id: 'sound-wave',
      title: 'Sound Wave Effect',
      description: 'Audio visualization with oscillating wave patterns and frequency response',
      className: 'sound-wave-animation'
    },
    {
      id: 'particle-swarm',
      title: 'Particle Swarm Effect',
      description: 'Dynamic particle system with flocking behavior and organic movement patterns',
      className: 'particle-swarm-animation'
    },
    {
      id: 'liquid-metal',
      title: 'Liquid Metal Effect',
      description: 'Mercury-like fluid animation with surface tension and metallic reflections',
      className: 'liquid-metal-animation'
    },
    {
      id: 'cyberpunk-grid',
      title: 'Cyberpunk Grid Effect',
      description: 'Futuristic neon grid with scanning lines and digital distortion',
      className: 'cyberpunk-grid-animation'
    },
    {
      id: 'dna-helix',
      title: 'DNA Helix Effect',
      description: 'Rotating double helix with genetic code visualization and molecular bonds',
      className: 'dna-helix-animation'
    },
    {
      id: 'origami-crane',
      title: 'Origami Crane Effect',
      description: 'Elegant paper crane folding and unfolding with graceful wing movements',
      className: 'origami-crane-animation'
    },
    {
      id: 'quantum-entanglement',
      title: 'Quantum Entanglement Effect',
      description: 'Interconnected particles with synchronized movements and quantum state transitions',
      className: 'quantum-entanglement-animation'
    },
    {
      id: 'holographic-mirror',
      title: 'Holographic Mirror Effect',
      description: 'Reflective surface with holographic projections and light refraction',
      className: 'holographic-mirror-animation'
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