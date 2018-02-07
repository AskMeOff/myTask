import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {store} from "./Store";



// const addNoteBtn = document.querySelectorAll('.addNote')[0];
//
// addNoteBtn.addEventListener('click', () => {
//     const noteName = document.querySelectorAll('.noteInput').value;
//     console.log('note: ', noteName);
//     store.dispatch({
//         type: 'ADD_NOTE',
//         note: noteName
//     });
// });

ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
