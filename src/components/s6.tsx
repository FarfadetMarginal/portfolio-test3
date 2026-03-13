import { useState } from 'react';
import '../styles/s6.scss';




const s6 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
      <div className="flip-card" onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
            <div className="flip-card__front">
                <div className="flip-card__overlay">Contact</div>
            <img src="/img/boblepyvgbh.jpg" alt="image derrière" />
             </div>
        <div className="flip-card__back">
                <p>Envoie moi un mail   <a href="mailto:bapt935@gmail.com">ICI</a></p>
        </div>
    </div>
</div>
  );
};

export default s6;