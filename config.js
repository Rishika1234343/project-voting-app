import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBSO2WNmlsdVZXhkUPEx_cbxJHr4qczf8s",
  authDomain: "project-voting-app-c0cde.firebaseapp.com",
  projectId: "project-voting-app-c0cde",
  storageBucket: "project-voting-app-c0cde.appspot.com",
  messagingSenderId: "921403391456",
  appId: "1:921403391456:web:f870e60ace900374243f85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();