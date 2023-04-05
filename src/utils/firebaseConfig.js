import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCQt7ohk_qF2seIljN3BpDy35Bb7-JeD0",
  authDomain: "klimty-8469b.firebaseapp.com",
  projectId: "klimty-8469b",
  storageBucket: "klimty-8469b.appspot.com",
  messagingSenderId: "111758548194",
  appId: "1:111758548194:web:44a175a7d8fdedfa91d2bb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
export const storage = getStorage(app);
