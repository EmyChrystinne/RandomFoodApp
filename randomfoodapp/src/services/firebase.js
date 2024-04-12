// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMs5JwbmMvJ79VRkCkUy5ZOTDiG5zhik8",
  authDomain: "test-5e762.firebaseapp.com",
  projectId: "test-5e762",
  storageBucket: "test-5e762.appspot.com",
  messagingSenderId: "428948762466",
  appId: "1:428948762466:web:2120036268f357d968c63b",
  measurementId: "G-L7EPMFL3FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// const handleGoogleLogin = async (e) => {
//   e.preventDefault();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log("Usuário logado com sucesso!", result);
//     })
//     .catch((error) => {
//       console.error("Erro ao logar o usuário:", error);
//     });
// };
export { app , auth, provider}