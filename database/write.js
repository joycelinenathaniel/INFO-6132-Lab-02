import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Saves new task to Firebase.
 * 
 * @param {object} data 
 * The description and status of a task.
 * @returns 
 * Promise 
 */
export async function save(data) {
    try {
        const dbCollection = collection(db, 'tasks');
        const docRef = await addDoc(dbCollection, data);
        return docRef.id;
    } catch (e) {
        return null;
    }
}

/**
 * Updates the status of a task in Firebase.
 * 
 * @param {id} id 
 * The document id from the Firebase collection.
 * @param {object} data 
 * The updated status of a task. 
 * @returns 
 * Promise 
 */
export async function update(id, data) {
    try {
        const docRef = doc(db, "tasks", id);
        await updateDoc(docRef, data);
        return true;
    }
    catch (e) {
        return false;
    }
}

/**
 * Removes task from Firebase database. 
 * 
 * @param {id} id 
 * The document id from the Firebase collection.
 * @returns 
 * Promise
 */
export async function remove(id) {
    try {
        const docRef = doc(db, "tasks", id);
        await deleteDoc(docRef);
        return true;
    }
    catch (e) {
        return false;
    }
}