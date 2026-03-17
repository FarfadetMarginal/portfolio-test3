import Cursor from '../components/Cursor.tsx'
import Enigme from '../components/Enigme.tsx'
import '../styles/enigme.scss'


import { useState } from 'react';

const NotFound = () => {
    const [titre, setTitre] = useState("Rien à voir ici...");

    return (
        <>
        <Cursor />
        <Enigme onWin={() => setTitre("Envoi -urluberlu- au 06 52 61 79 xx pour une récompense digne de ce nom...")} />
        <h1>{titre}</h1>
        </>
    );
};

export default NotFound;

