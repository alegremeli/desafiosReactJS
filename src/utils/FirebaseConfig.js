import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPbccXlVFr1Y4sSNXNpsRi6LYW4KyFDCc",
  authDomain: "e-commercereact-984c5.firebaseapp.com",
  projectId: "e-commercereact-984c5",
  storageBucket: "e-commercereact-984c5.appspot.com",
  messagingSenderId: "735556615633",
  appId: "1:735556615633:web:315548d8642849c68634f0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)