import { useState } from 'react';
import '../styles/s3.scss';



const S3 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card__front">
            <div className="flip-card__overlay">Skills</div>
          <p>HTML - <span>CSS</span> - JavaScript - <span>Python</span> - PHP - <span>CMS Wordpress</span> - React - <span>Node.js</span> - Typescript - <span>Figma</span> - Algorithmique - <span>MySQL</span> - MongoDB - <span>Git et GitHub</span> - Base de données relationnelle - <span>Ergonomie et Accessibilité</span> - Méthode AGILE - <span>OWASP</span> - Gestion projet Trello - <span>Méthode KANBAN</span> - Déploiement d’application + suivi - <span>Eco Conception (Green IT)</span> - Propriété intellectuelle - <span>Concevoir des API ReST</span> - Référencement SEO et GEO - <span>DevOps</span> - RGPD/Mentions légales - <span>Analytics</span>
          </p>
        </div>
        <div className="flip-card__back">
          <img src="/img/c4703cd21ec7e4f43455190c78f29cff.jpg" alt="image derrière" />
        </div>
      </div>
    </div>
  );
};
export default S3;