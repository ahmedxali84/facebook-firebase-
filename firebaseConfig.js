import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBikfwXnXrix111jJT6CwxEHDIHVrsthrg",
    authDomain: "facebook-b15f7.firebaseapp.com",
    projectId: "facebook-b15f7",
    storageBucket: "facebook-b15f7.firebasestorage.app",
    messagingSenderId: "808455848441",
    appId: "1:808455848441:web:31605716c6c5fcb832bd28",
    measurementId: "G-YXRZ2VD5L4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
