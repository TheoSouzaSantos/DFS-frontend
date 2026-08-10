import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDDB4wns3Irkrsm1xwft8AX1iYecAWjFBk",
    authDomain: "dynamic-flame-sensor-cb50b.firebaseapp.com",
    projectId: "dynamic-flame-sensor-cb50b",
    storageBucket: "dynamic-flame-sensor-cb50b.firebasestorage.app",
    messagingSenderId: "638183225251",
    appId: "1:638183225251:web:43b291d8f2aceec27d8c16"
  };
  

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };