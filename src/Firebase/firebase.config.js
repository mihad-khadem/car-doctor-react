import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuxpDTb4dNut5ynjrJrW2y_bT4GxT9RdM",
  authDomain: "car-doctor-react-78cbe.firebaseapp.com",
  projectId: "car-doctor-react-78cbe",
  storageBucket: "car-doctor-react-78cbe.appspot.com",
  messagingSenderId: "431429529762",
  appId: "1:431429529762:web:4ae56fc77401e0bf1627fb",
};

// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,

const app = initializeApp(firebaseConfig);

export default app;
