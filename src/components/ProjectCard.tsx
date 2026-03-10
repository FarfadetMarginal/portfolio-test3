import { useState } from 'react';

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    const [flipped, setFlipped] = useState(false);
    
    return (
        <div className="flip-card" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
                

                <div className="flip-card__front">
                    <div className="flip-card__overlay">{title}</div>
                    <img src={image} alt={title} />
                </div>

                <div className="flip-card__back">

                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a className="lienpj" href={link}>lien</a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;