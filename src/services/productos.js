import {db} from "./firebase.js"
import {
  collection,
  getDoc,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore"

const refPrudctos = collection(db, 'productos')

export  function cargarProductos (callback){

  return onSnapshot(refPrudctos, snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        nombre: doc.data().nombre,
        descripcion: doc.data().descripcion,
        precio: doc.data().precio,
        cupo: doc.data().cupo

      }
    })
    callback(data);
  })
}

export async function obtenerProductoPorId(id) {
  console.log(`productos/${id}`)
  const refPrudcto = doc(db, `productos/${id}`);
  const docSnapshot = await getDoc(refPrudcto);

  return {
    id: docSnapshot.id,
    nombre: docSnapshot.data().nombre,
    descripcion: docSnapshot.data().descripcion,
    precio: docSnapshot.data().precio,
    cupo: docSnapshot.data().cupo
  }
}

export async function deleteProducto(id){
  await deleteDoc(doc(db, 'productos' , id))
}

export function editarProducto(producto) {
  updateDoc(doc(db, 'productos' , producto.id),{
    cupo: producto.cupo,
    descripcion: producto.descripcion,
    nombre: producto.nombre,
    precio: producto.precio,
  })
}

export function agregarProducto(producto){
  return addDoc(refPrudctos, {
    ...producto,
    created_at: serverTimestamp()
  });
}
