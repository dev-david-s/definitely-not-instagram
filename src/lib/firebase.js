// import { seedDatabase } from '../seed';

const config = {
    // firebase config
}

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };