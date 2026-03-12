import { useState } from 'react';
import '../styles/s4.scss';




const s4 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
      <div className="flip-card" onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
            <div className="flip-card__front">
                <div className="flip-card__overlay">Projets</div>
            <img src="/img/snoopygvuhbjk.jpg" alt="image derrière" />
             </div>
        <div className="flip-card__back">
                <p>Les projets? bah yen a plein, si tu veux tout voir voila un lien <a href="/projects">clique?</a></p>
        </div>
    </div>
</div>
  );
};

export default s4;