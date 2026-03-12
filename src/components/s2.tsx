import { useState } from 'react';
import '../styles/s2.scss';




const s2 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
      <div className="flip-card" onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
            <div className="flip-card__front">
                <div className="flip-card__overlay">Liens</div>
            <img src="/img/d0968d1025bacc060d652cc43ecdce9a.jpg" alt="image derrière" />
             </div>
        <div className="flip-card__back">
                <p>Liens utiles : <a href="https://github.com/FarfadetMarginal">GitHub</a>
                <a href="https://www.linkedin.com/in/baptiste-coutas-0aa35a323/">Linkedin</a></p>
        </div>
    </div>
</div>
  );
};

export default s2;