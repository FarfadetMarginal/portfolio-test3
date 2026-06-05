import { useState } from 'react';
import '../styles/s4.scss';
import { Link } from "react-router-dom";




const S4 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
      <div className="flip-card" onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
            <div className="flip-card__front">
                <div className="flip-card__overlay">Projets</div>
            <img src="/img/snoopygvuhbjk.jpg" alt="image derrière" />
             </div>
        <div className="flip-card__back">
                <p>Les projets? Il y en a beaucoup, clique ici pour tous les voir <Link to="/projects">Projects</Link></p>
        </div>
    </div>
</div>
  );
};

export default S4;