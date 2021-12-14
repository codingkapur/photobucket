import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//Import Seed File to populate databse.
// import { seedDatabase } from "../seed";
//Go to firestore, project setings, add an app, web, get config details.

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Populate the database with the seed data. run only once.
// seedDatabase(firebase);

export { firebase, FieldValue };
