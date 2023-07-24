// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAL8GCOQutNqN5347Y7rn8NZEE660cqUFY",
    authDomain: "whatsapp-clone-281b0.firebaseapp.com",
    projectId: "whatsapp-clone-281b0",
    storageBucket: "whatsapp-clone-281b0.appspot.com",
    messagingSenderId: "243528529502",
    appId: "1:243528529502:web:c355a669c11032ef4926cf"
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);

}