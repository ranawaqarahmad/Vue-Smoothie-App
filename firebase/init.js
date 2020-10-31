import firebase from 'firebase'
import firestore from 'firebase/firestore'
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAkEcr-UggePn8z0tSbMsk63eCRWw2zEyQ",
    authDomain: "vue-ninja-smoothies-a5275.firebaseapp.com",
    databaseURL: "https://vue-ninja-smoothies-a5275.firebaseio.com",
    projectId: "vue-ninja-smoothies-a5275",
    storageBucket: "vue-ninja-smoothies-a5275.appspot.com",
    messagingSenderId: "136878865909",
    appId: "1:136878865909:web:9bc48c68055c4214bd34bc",
    measurementId: "G-VE2VHNCM8R"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})
  // firebase.analytics();

  // export firestore database
  export default firebaseApp.firestore()