import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtdFijrava022CwqdDH-vWeWDohxzUuA",
  authDomain: "oshop-5f855.firebaseapp.com",
  projectId: "oshop-5f855",
  storageBucket: "oshop-5f855.appspot.com",
  messagingSenderId: "852264376008",
  appId: "1:852264376008:web:3edd47231b8c4b8356f7fd",
  measurementId: "G-J8FRGNJDLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
