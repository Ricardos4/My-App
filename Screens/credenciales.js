import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi2VH-AEIzd53nf9yP1AktjKexY20MERQ",
  authDomain: "myapp-a16d1.firebaseapp.com",
  projectId: "myapp-a16d1",
  storageBucket: "myapp-a16d1.appspot.com",
  messagingSenderId: "844367529528",
  appId: "1:844367529528:web:d3e5bb383e8ad133f088cd",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
