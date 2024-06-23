// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmK2WY_621WJm_1JVxFe9cpcm8KxCawaM",
    authDomain: "quackfy-quiz.firebaseapp.com",
    projectId: "quackfy-quiz",
    storageBucket: "quackfy-quiz.appspot.com",
    messagingSenderId: "839679735943",
    appId: "1:839679735943:web:d1c54bf9c2249e9eb6a022",
    measurementId: "G-BR4LHJEDKG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();