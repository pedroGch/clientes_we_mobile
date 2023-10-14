import {BDNAME} from './../config'
import {db} from "./firebase.mjs"
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore"

const refChat = collection(db, BDNAME)

export function todoSave(data){
  return addDoc(refChat, data);
}

export  function loadSnapshot (callback){
  onSnapshot(refChat, snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        mensaje: doc.data().mensaje,
        usuario: doc.data().usuario,

      }
    })
    callback(data);
  })

}


export function taskCompleted(task) {
  console.log(task)
  updateDoc(doc(db, BDNAME , task.id),{
    completed: !task.completed,
  })
}

export async function deleteTask(task){
  await deleteDoc(doc(db, BDNAME , task.id))
}
