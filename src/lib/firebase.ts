import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD39Ii5GhS8cE0ZjfLep7nejvG_d2-O9bg",
  authDomain: "dina-project-93.firebaseapp.com",
  databaseURL: "https://dina-project-93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dina-project-93",
  storageBucket: "dina-project-93.firebasestorage.app",
  messagingSenderId: "876383495958",
  appId: "1:876383495958:web:cda429a089d9ed58051237",
  measurementId: "G-STHCJQTDNL"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
