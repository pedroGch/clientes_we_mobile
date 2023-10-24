import {BDNAME} from '../../conf'
import {db} from "./firebase.js"
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore"

const refChat = collection(db, 'usuarios')


/**
 * Agrega un mensaje a la base de datos
 * @param {*} data
 * @returns
 */
export function saveMessage(data){
  return addDoc(refChat, {
    ...data,
    created_at: serverTimestamp()
  });
}

/**
 * Carga los mensajes de la base de datos y los ordena por fecha
 * @params {() => {}} callback
 * @returns (import('firebase/auth').Unsubscribe)
 */

export  function loadSnapshot (callback){

  return onSnapshot(refChat, snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        userId: doc.id,
        usuario: doc.data().email,
      }
    })
    callback(data);
  })

}

