const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyCJ5EFdS5URgZt97ssXS9aaZm-axgHH-m8",
            authDomain: "whatsapp-clone-7b546.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-7b546.firebaseio.com",
            projectId: "whatsapp-clone-7b546",
            storageBucket: "whatsapp-clone-7b546.appspot.com",
            messagingSenderId: "1042927933505",
            appId: "1:1042927933505:web:8c4542badb455ba6fe0ec0",
            measurementId: "G-BYDXG1JQC1"
        };

        this.init();

    }

    init(){

        if (!window._initializedFirebase){
            firebase.initializeApp(this._config);

            firebase.firestore().settings({});

            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s,f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.accessToken;
                    let user = result.user;

                    s({
                        user,
                        token
                    });

                })
                .catch(err=>{
                    f(err);
                });

        });

    }

}