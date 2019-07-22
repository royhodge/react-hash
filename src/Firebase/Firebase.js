

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


let credentials = {
    firebase: {
        apiKey: "AIzaSyAMaUfvRTR4CjflGH2H_ooqhQgQm326SYY",
        authDomain: "ipfs-hashes.firebaseapp.com",
        databaseURL: "https://ipfs-hashes.firebaseio.com",
        projectId: "ipfs-hashes",
        storageBucket: "ipfs-hashes.appspot.com",
        messagingSenderId: "991648457606",
        appId: "1:991648457606:web:1f7d12c58b8e5f8b"
    }
}

export default {
    app: firebase.initializeApp(credentials.firebase),
    auth: firebase.auth(),
    db: firebase.firestore()
}

