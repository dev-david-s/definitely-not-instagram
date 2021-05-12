// import { seedDatabase } from '../seed';

const config = {
    // firebase config
    apiKey: "AIzaSyCsF7qfWPpcr1Zt7yi7HEmV3ILlwlbm_vQ",
    authDomain: "instagram-clone-b9ffd.firebaseapp.com",
    projectId: "instagram-clone-b9ffd",
    storageBucket: "instagram-clone-b9ffd.appspot.com",
    messagingSenderId: "166518995836",
    appId: "1:166518995836:web:0907e2ffa0e227674182f9"
}

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };