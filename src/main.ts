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
  apiKey: "AIzaSyDYWiNzqJHMGHhbzI4i3x98r3LRQRALddc",
  authDomain: "oshop-project-cdf65.firebaseapp.com",
  projectId: "oshop-project-cdf65",
  storageBucket: "oshop-project-cdf65.appspot.com",
  messagingSenderId: "92287893353",
  appId: "1:92287893353:web:ca14ecec8109a24b3d47f8",
  measurementId: "G-QFWJG7YCEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
