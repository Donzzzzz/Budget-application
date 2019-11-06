// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account"
});

export { firebase, googleAuthProvider, database as default };

// // Add
// database
//   .ref()
//   .set({
//     name: "Edom",
//     location: {
//       city: "Sydney",
//       country: "Australia"
//     },
//     job: {
//       title: "Software developer",
//       company: "Google"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed! " + e);
//   });

// database.ref("location/city").set("New York");

// // Add
// database
//   .ref("attribute")
//   .set({
//     height: 180,
//     weight: 70
//   })
//   .then(() => {
//     console.log("Second data is saved");
//   })
//   .catch(e => {
//     console.log("This failed! " + e);
//   });

// // Remove
// database
//   .ref("attribute")
//   .remove()
//   .then(() => {
//     console.log("Remove success");
//   })
//   .catch(e => {
//     console.log(e);
//   });

// // Update
// database.ref().update({
//   name: "Mike",
//   age: 29
// });

// // Read data for one time
// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Faild to fetch data", e);
//   });

// // Read data if there has any changes, because Promise then only run once time,
// // so we provide a callback funtion
// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref("expenses").push({
//   description: "Phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 976123498763
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 1200,
//   createdAt: 976123498763
// });

// // Read data
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
