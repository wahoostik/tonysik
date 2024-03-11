import styled from 'styled-components';
import { useStateProvider } from '@utils/UseStateProvider';
import { useEffect } from 'react';
import axios from 'axios';

const Playlists = () => {

    const [{ token, dispatch }] = useStateProvider();

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
        };
        getPlaylistData();
        
    }, [ token, dispatch ]);

    return (
        <Container>Playlists</Container>
    );
};

const Container = styled.div`
    color: white;
`;

export default Playlists;