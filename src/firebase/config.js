import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAABQrMee5Dh5O3S0GZMVnenxU3SChVWYw",
  authDomain: "my-money-app-3010.firebaseapp.com",
  projectId: "my-money-app-3010",
  storageBucket: "my-money-app-3010.appspot.com",
  messagingSenderId: "1055482859163",
  appId: "1:1055482859163:web:5b2c53ea5f15e34580c03e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }