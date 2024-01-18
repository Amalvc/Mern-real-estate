// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '1078482850952',
  appId: '',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
