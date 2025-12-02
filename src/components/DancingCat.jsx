import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <button onClick={toggleAnimation} className="control-button">
        {isAnimating ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  );
}

export default DancingCat;
