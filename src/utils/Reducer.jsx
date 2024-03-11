import { reducerCases } from '@utils/Constants';

// Initialisation du state de useReducer
export const initialState = {
    token: null, // Spotify Token à l'état "null" initialement
    playlists: [], // Tableau vide des playlists personnalisées
};

const reducer = (state, action) => {
    switch (action.type) {
    case reducerCases.SET_TOKEN:
        return {
            ...state,
            token: action.token,
        };
    case reducerCases.SET_PLAYLISTS:
        return {
            ...state,
            playlists: action.playlists,
        };
    default:
        throw state;
    }
};

export default reducer;