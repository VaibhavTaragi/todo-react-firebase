import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNSutz-rZJRK8AtIbfhHx-_rcOFn-tqW0",
  authDomain: "todos-74d1d.firebaseapp.com",
  projectId: "todos-74d1d",
  storageBucket: "todos-74d1d.appspot.com",
  messagingSenderId: "121054916638",
  appId: "1:121054916638:web:c084ecd57647835f4fbe0f",
  measurementId: "G-0Z3D7RX7T2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);