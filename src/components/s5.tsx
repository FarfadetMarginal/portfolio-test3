import { useState } from 'react';
import '../styles/s5.scss';




const s5 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card__front">
            <div className="flip-card__overlay">Parcours</div>
          <p className ="pparc">
           <span>2025→
            Dev web web mobile
            La plateforme, Brignoles </span></p> <p className ="pparc">  
            2024→2025
            master ergonomie et psychologie de la réadaptation
            Université Champollion, Albi </p> <p className ="pparc">  
            <span>2020→2024
            Licence psychologie
            Lille, Aix en Provence </span></p> <p className ="pparc">  
            2019
            Prepa Design
            Ecole de Conde, Nice</p>
        </div>
        <div className="flip-card__back">
          <img src="/img/a61d015fc61c124bc1df5d94325982a7.jpg" alt="image derrière" />
        </div>
      </div>
    </div>
  );
};

export default s5;