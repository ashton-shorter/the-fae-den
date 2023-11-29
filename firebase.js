import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7Lb04hf32eYzYy6rpiwDRWVojdkQSSk4",
  authDomain: "trippy-hippy69.firebaseapp.com",
  projectId: "trippy-hippy69",
  storageBucket: "trippy-hippy69.appspot.com",
  messagingSenderId: "286487003558",
  appId: "1:286487003558:web:4dd3be18c142a06fef0f67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;