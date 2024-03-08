import { reducerCases } from '@utils/Constants';

// Initialisation du state de useReducer
export const initialState = {
    token: null // Spotify Token à l'état "null" initialement
};

const reducer = (state, action) => {
    switch (action.type) {
    case reducerCases.SET_TOKEN:
        return {
            ...state,
            token: action.token,
        };
    default:
        throw state;
    }
};

export default reducer;