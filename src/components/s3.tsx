import { useState } from 'react';
import '../styles/s3.scss';




const s3 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card__front">
            <div className="flip-card__overlay">Skills</div>
          <p>frontend - <span>backend</span> - HTML - <span>CSS</span> - JavaScript - 
            <span>Python</span> - PHP - <span>CMS Wordpress</span> - React - <span>Node.js</span> - Typescript
          </p>
        </div>
        <div className="flip-card__back">
          <img src="/img/c4703cd21ec7e4f43455190c78f29cff.jpg" alt="image derrière" />
        </div>
      </div>
    </div>
  );
};

export default s3;