import { useState } from 'react';
import '../styles/s1.scss';




const s1 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card__front">
            <div className="flip-card__overlay">Présentation</div>
          <p>
            J'ai commencé par une prépa design, puis j'ai obtenu une licence de psychologie avant d'enfin me lancer enfin dans le developpement web.

            Bien que basé en France je suis ouvert à toutes sortes d'opportunités. Je suis fluent en anglais, et j'ai d'autres compétences utiles au design (photographie, Lightroom, photoshop, canva, etc).</p>
        </div>
        <div className="flip-card__back">
          <img src="public/img/d4cd9a390199d77a61236e9473bfcc24.jpg" alt="image derrière" />
        </div>
      </div>
    </div>
  );
};

export default s1;