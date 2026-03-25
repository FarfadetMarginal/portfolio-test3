import { useRef, useEffect, useState } from 'react';

const Enigme = ({ onWin }: { onWin: () => void }) => {

    const [won, setWon] = useState(false);

    const mer = useRef<HTMLDivElement>(null);
    const ve = useRef<HTMLDivElement>(null);
    const yeux = useRef<HTMLDivElement>(null);
    const myst = useRef<HTMLDivElement>(null);
    const input1 = useRef<HTMLInputElement>(null);


    const handleSubmit = () => {
        if (input1.current?.value == "merveilleux") {
            console.log("won");
            setWon(true);
            onWin();

        } else {
            console.log("loserrrrrrrrrr");
            if (input1.current) {
                input1.current.value = "";
}
        }
    };

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
                myst.current.style.display = 'flex';
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
            <div className={won ? 'enigme__bg won' : 'enigme__bg'} style={{ position: 'fixed', inset: 0, zIndex: -1 }} />
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
                <input ref={input1} type="text" className="inputmyst" />
                <button onClick={handleSubmit} type="submit" className="boutonsub"> ??????? </button>
            </div>

            <aside className="container-loader" style={{display: won ? 'block' : 'none'}}>
                <article className="aro" style={{ '--d': 1 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 2 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 3 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 4 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 5 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 6 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 7 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 8 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 9 } as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 10} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 11} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 12} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 13} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 14} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 15} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 16} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 17} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 18} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 19} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 20} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 21} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 22} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 23} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 24} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 25} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 26} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 27} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 28} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 29} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 31} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 32} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 33} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 34} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 35} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 36} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 37} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 38} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 39} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 40} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 41} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 42} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 43} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 44} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 45} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 46} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 47} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 48} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 49} as React.CSSProperties}></article>
                <article className="aro" style={{ '--d': 50} as React.CSSProperties}></article>
            </aside>

            <div className="loader" style={{display: won ? 'block' : 'none'}}>
                <div className="cube">
                    <div className="side front"></div>
                    <div className="side back"></div>
                    <div className="side top"></div>
                    <div className="side bottom"></div>
                    <div className="side left"></div>
                    <div className="side right"></div>
                </div>
            </div>
 

        </>
    );
};




export default Enigme
