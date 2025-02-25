// api logic for fetching university logos from firebase

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig.js";



export const fetchUniversities = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Universities"));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // All fields in the document
      }));
    } catch (error) {
      console.error("Error fetching universities:", error);
        throw new Error("Failed to fetch universities");
    }
  };
