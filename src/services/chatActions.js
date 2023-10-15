import {BDNAME} from './../config'
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

const refChat = collection(db, BDNAME)
const qry = query(refChat, orderBy('created_at'))

export function saveMessage(data){
  return addDoc(refChat, {
    ...data,
    created_at: serverTimestamp()
  });
}

export  function loadSnapshot (callback){
  onSnapshot(qry,refChat, snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        mensaje: doc.data().mensaje,
        usuario: doc.data().usuario,
        fecha_mensaje: doc.data().created_at

      }
    })
    callback(data);
  })

}


// export function taskCompleted(task) {
//   console.log(task)
//   updateDoc(doc(db, BDNAME , task.id),{
//     completed: !task.completed,
//   })
// }

// export async function deleteTask(task){
//   await deleteDoc(doc(db, BDNAME , task.id))
// }
