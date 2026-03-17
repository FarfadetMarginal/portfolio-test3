import { useRef, useEffect } from 'react';

const Enigme = () => {

    const mer = useRef<HTMLDivElement>(null);
    const ve = useRef<HTMLDivElement>(null);
    const yeux = useRef<HTMLDivElement>(null);
    const myst = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }

    let merX = getRandomInt(window.innerWidth - 40);
    let merY = getRandomInt(window.innerHeight - 40);
    let veX = getRandomInt(window.innerWidth - 40);
    let veY = getRandomInt(window.innerHeight - 40);
    let yeuxX = getRandomInt(window.innerWidth - 40);
    let yeuxY = getRandomInt(window.innerHeight - 40);

    if (mer.current) {
    mer.current.style.left = `${merX}px`;
    mer.current.style.top = `${merY}px`;
    }

       const handleMer = () => {
            // mer change de couleur
            if (mer.current) {
                mer.current.style.color = '#DE0068';
            }
            // ve apparaît à une position aléatoire
            if (ve.current) {
                ve.current.style.display = 'block';
                ve.current.style.left = `${veX}px`;
                ve.current.style.top = `${veY}px`;
            }
        };

        const handleVe = () => {
            // ve change de couleur
            if (ve.current) {
                ve.current.style.color = '#DE0068';
            }
            if (mer.current) {
                mer.current.style.display = 'none';
            }
            // yeux apparaît à une position aléatoire
            if (yeux.current) {
                yeux.current.style.display = 'flex';
                yeux.current.style.left = `${yeuxX}px`;
                yeux.current.style.top = `${yeuxY}px`;
            }
        };

        const handleYeux = () => {
            // yeux change de couleur
            if (yeux.current) {
                yeux.current.style.color = '#DE0068';
            }
            if (ve.current) {
                ve.current.style.display = 'none';
            }
            if (myst.current) {
                myst.current.style.display = 'block';
            }
        };

        mer.current?.addEventListener('mouseenter', handleMer);
        ve.current?.addEventListener('mouseenter', handleVe);
        yeux.current?.addEventListener('mouseenter', handleYeux);

        return () => {
            mer.current?.removeEventListener('mouseenter', handleMer);
            ve.current?.removeEventListener('mouseenter', handleVe);
            yeux.current?.removeEventListener('mouseenter', handleYeux);
        };

    }, []);

    return (
        <>
            <div ref={mer} className="enigme__icon" style={{ position: 'fixed', fontSize:'60px', color: '#F7BB00'}}>
                <i className="fa-solid fa-umbrella-beach"></i><i className="fa-solid fa-water"></i>
            </div>

            <div ref={ve} className="enigme__icon" style={{ position: 'fixed', display: 'none', fontSize:'60px', color: '#F7BB00' }}>
                <i className="fa-brands fa-v"></i>
            </div>

            <div ref={yeux} className="enigme__icon" style={{ position: 'fixed', display: 'none', fontSize:'60px', color: '#F7BB00' }}>
                <i className="fa-solid fa-eye"></i><i className="fa-solid fa-eye"></i>
            </div>
            <div ref={myst} className="myst" style={{ position: 'fixed', display: 'none'}}>
                <input type="text" />
                <button type="submit" className="boutonsub"></button>
            </div>
        </>
    );
};




export default Enigme
