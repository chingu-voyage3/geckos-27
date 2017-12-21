import firebase from 'firebase';
import {FIREBASE} from './constants';

var config = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE_URL,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID
};

export default firebase.initializeApp(config);