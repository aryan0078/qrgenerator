import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC9laER_-DZUzv5DvMfFMoHWt1cENABk9M",
    authDomain: "qrgenerator-ad1c1.firebaseapp.com",
    databaseURL: "https://qrgenerator-ad1c1.firebaseio.com",
    projectId: "qrgenerator-ad1c1",
    storageBucket: "qrgenerator-ad1c1.appspot.com",
    messagingSenderId: "1045264703983",
    appId: "1:1045264703983:web:e99cd50783ea06fab6561a",
    measurementId: "G-LG9609MEE7"
  };
  const app = firebase.initializeApp(firebaseConfig);
export default app