import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDoc,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

export const auth = getAuth();
export const db = getFirestore();
export const conversationRef = collection(db, "conversations");
