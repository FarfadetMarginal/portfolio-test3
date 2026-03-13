import { useRef, useEffect } from 'react';

const OsDeCon = () => {

    const os = useRef<HTMLDivElement>(null);

useEffect(() => {


    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }

    let osX = getRandomInt(window.innerWidth - 40);
    let osY = getRandomInt(window.innerHeight - 40);
    let score = 0;

    if (os.current) {
        os.current.style.left = `${osX}px`;
        os.current.style.top = `${osY}px`;
    }


    const curseurBon = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target.closest('.os__icon')){
        osX = getRandomInt(window.innerWidth - 40);
        osY = getRandomInt(window.innerHeight - 40);
        score = score+1;

        console.log(score);

        if (score == 10) {
            alert("bon toutou");
        }

        if (score == 20) {
            alert("très bon toutou");
        }

        if (score == 30) {
            alert("trèèèèèèèès bon toutou!! c'est bien!!!");
        }

        if (score == 40) {
            alert("wouaf wouaf bon toutou wouaf wouaf");
        }

        if (score == 50) {
            alert("wouaf wouaf grrrrr GRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        }

        if (score == 60) {
            alert("?");
        }

        if (score == 70) {
            alert("t'en a pas eu assez? hmmm, t'es un vrai bon toutou toi, un vrai de vrai");
        }

        if (score == 80) {
            alert("après faut peut-être se poser des questions la");
        }

        if (score == 90) {
            alert("oui là c'est direction l'HP");
        }

        if (score == 100) {
            alert("Et non je rigole ! tu t'es pas fait avoir et tu décroche la médaille du meilleur chien de Plessala, petite village des Côtes d'Armor!");
        }

        if (score == 999) {
            alert("succès déverouillé - COAT (chômeur of all time) veuillez contacter l'auteur du site pour une récompense");
        }

        if (os.current) {
            os.current.style.left = `${osX}px`;
            os.current.style.top = `${osY}px`;
        }
    };
  };



  document.addEventListener('mouseover', curseurBon);

  return () => {
     document.removeEventListener('mouseover', curseurBon);
  };


  
}, []);
    return (
        <div ref={os} className="os__icon">
            <i className="fa-solid fa-bone"></i>
        </div>
    );
};

export default OsDeCon;