import { useContext } from 'react';
import { StateContext } from '@utils/StateProvider';

// Il renverra la valeur du contexte d'état
export const useStateProvider = () => useContext(StateContext);