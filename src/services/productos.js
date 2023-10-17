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
  const refPrudcto = doc(db, `productos/${id}`);
  const docSnapshot = await getDocs(refPrudcto);

  return {
    id: docSnapshot.id,
    nombre: doc.data().nombre,
    descripcion: doc.data().descripcion,
    precio: doc.data().precio,
    cupo: doc.data().cupo
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
