import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCixPSYk_XvcOu_mcNpHwVgnMpF1cE7QUY",
    authDomain: "routine-master-cc786.firebaseapp.com",
    projectId: "routine-master-cc786",
    storageBucket: "routine-master-cc786.appspot.com",
    messagingSenderId: "151609052061",
    appId: "1:151609052061:web:be46bcfa843700e0ef7d74",
    measurementId: "G-N6JKFQ5FYG"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };