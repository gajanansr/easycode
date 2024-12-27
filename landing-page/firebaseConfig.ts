import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  if (isSupported()) {
    analytics = getAnalytics(app);
  }
}

const db = getFirestore(app);

export const storeEmail = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "emails"), {
      email: email,
      timestamp: new Date(),
    });
    console.log("Email stored with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding email: ", e);
  }
};
