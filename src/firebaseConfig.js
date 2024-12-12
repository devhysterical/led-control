import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDh39zdiz1vR1-xp1Nn2cis5r4BQydRdIs",
  authDomain: "kiem-tra-iot-84cac.firebaseapp.com",
  projectId: "kiem-tra-iot-84cac",
  storageBucket: "kiem-tra-iot-84cac.firebasestorage.app",
  messagingSenderId: "208727581605",
  appId: "1:208727581605:web:0af0439a61de868dc9be4c",
  measurementId: "G-78GHHBJG45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, push, ref };
