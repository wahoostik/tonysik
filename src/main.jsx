import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@/index.css';
import { StateProvider } from '@utils/StateProvider';
import reducer, { initialState } from '@utils/Reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/** On enveloppe l'application pour pouvoir l'utiliser sur tous les composants */}
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
);
