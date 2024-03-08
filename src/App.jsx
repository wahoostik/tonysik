import Login from '@components/Login';
import { useEffect } from 'react';
import { useStateProvider } from '@utils/UseStateProvider';
import { reducerCases } from '@utils/Constants';
import Tonysik from '@components/Tonysik';

const App = () => {

    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {

        const hash = window.location.hash;
        if (hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            console.log(token);
            dispatch({ type: reducerCases.SET_TOKEN, token });
        }
        // Le 2e argument [] sert à dire qu'il ne doit être exécuté qu'une seule fois, après le premier rendu du composant
    }, [ token, dispatch ]);

    return (
        <>
            { token ? <Tonysik /> : <Login /> }
        </>
    );
};

export default App;