import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/App.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

import Firebase from './Firebase/Firebase'

let { db, auth } = Firebase;
let user = auth.currentUser

let parent = document.getElementById('root')

db.collection('DB').get()
    .then(querysnapshot => {
        let data = [];
        querysnapshot.forEach(doc => {
            data.push(doc.data());
        })
        ReactDOM.render(<App props={{ data: data, user: user }} />, parent);
    })
    .catch(error => {
        console.log(error)
    })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
