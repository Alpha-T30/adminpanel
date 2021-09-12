import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAlAO5hq3gMJOCbnhEsTvMjd81hjEIWhao",
  authDomain: "netflix-29adf.firebaseapp.com",
  projectId: "netflix-29adf",
  storageBucket: "netflix-29adf.appspot.com",
  messagingSenderId: "801495542897",
  appId: "1:801495542897:web:d12c37cc06e5a9a4a17fd0",
  measurementId: "G-V87S88J664"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

 

export default storage ;  