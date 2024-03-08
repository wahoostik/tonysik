import Login from '@components/Login';
import { useEffect } from 'react';

const App = () => {

    useEffect(() => {

        const hash = window.location.hash;
        if (hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            console.log(token);
        }
        // Le 2e argument [] sert à dire qu'il ne doit être exécuté qu'une seule fois, après le premier rendu du composant
    }, []);

    return (
        <>
            <Login/>
        </>
    );
};

export default App;