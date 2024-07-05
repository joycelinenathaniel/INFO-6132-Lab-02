import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLQ6LTo57L_vA3EN19GsooT000nTvGt6o',
  authDomain: 'info-6132-lab02-a4921.firebaseapp.com',
  projectId: 'info-6132-lab02-a4921',
  storageBucket: 'info-6132-lab02-a4921.appspot.com',
  messagingSenderId: '396502359677',
  appId: '1:396502359677:web:5bba13577c3067c1055b14',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
