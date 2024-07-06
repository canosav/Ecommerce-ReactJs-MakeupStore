// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSEy2T9ub4IZwXfmqtBEgv_jtfakYy7bs",
  authDomain: "carrito-reactjs-coder-e831c.firebaseapp.com",
  projectId: "carrito-reactjs-coder-e831c",
  storageBucket: "carrito-reactjs-coder-e831c.appspot.com",
  messagingSenderId: "210887302931",
  appId: "1:210887302931:web:8196e4ecb271c0cec844e6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//     .catch((error) => console.log(error));
// });