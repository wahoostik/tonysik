import styled from 'styled-components';
import { useStateProvider } from '@utils/UseStateProvider';
import { useEffect } from 'react';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

const Playlists = () => {

    const [{ token, playlists }, dispatch] = useStateProvider();

    useEffect(() => {

        const getPlaylistData = async () => {
            const response = await axios.get(
                'https://api.spotify.com/v1/me/playlists',
                {
                    headers: {
                        Authorization: 'Bearer ' + token, 'Content-Type': 'application/json',
                    },
                }
            );
            // console.log(response);
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            console.log(playlists);
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
        
    }, [ token, dispatch ]);

    return (
        <Container>
            <ul>
                {
                    playlists.map(({name, id}) => {
                        return (
                            <li key={id}>{name}</li>
                        );
                    })
                }
            </ ul>
        </Container>
    );
};

const Container = styled.div`
    color: white;*color: #b3b3b3;
    height: 100vh;
    overflow: auto;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        max-height: 100%;
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            white-space: nowrap; /* Empêche le texte de passer à la ligne */
            overflow: hidden; /* Cache le texte dépassant */
            text-overflow: ellipsis; /* Affiche "..." lorsque le texte déborde */
            &:hover {
                animation: scrollText 5s linear infinite; /* Animation de défilement horizontal */
            }
        }
    }

    @keyframes scrollText {
        0% { margin-left: 0; }
        100% { margin-left: -100%; }
    }
`;

export default Playlists;