import { db } from "./firebase";
import { doc, getDoc, getDocs, setDoc, serverTimestamp, collection, limit, where, query, updateDoc, arrayUnion } from "firebase/firestore";

/**
 * Obtiene un usuario por su id.
 * @param {string} id
 * @return {Promise<{id: string, email:string}>}
 */
export async function obtenerUsuarioPorId(id) {
  const refUser = doc(db, `usuarios/${id}`);
  const docSnapshot = await getDoc(refUser);

  return {
      id: docSnapshot.id,
      email: docSnapshot.data().email,
      rol: docSnapshot.data().rol,
      nombreUsuario: docSnapshot.data().nombreUsuario,
      genero: docSnapshot.data().genero,
      compras: docSnapshot.data().compras
  }
}

/**
 * Crea un perfil de usuario.
 * @param {string} id
 * @param {{email: string}} data
 * @return {Promise}
 */
export async function crearPerfilDeUsuario(id, data) {
  const refUser = doc(db, `usuarios/${id}`);
  return setDoc(refUser, {...data, created_at: serverTimestamp()});
}


/**
 * Obtiene el usuario con rol admin de la base de datos.
 * @returns {Promise<{id: string, email:string}>}
 */
export  async function obtenerAdmin (){
    const refUsuario = collection(db, 'usuarios')
    const q = query(
      refUsuario,
      where('rol', '==', 'admin'),
      limit(1),
    );
    const snapshot = await getDocs(q);

    const admin = snapshot.docs.map(doc => {
      return {
          id: doc.id,
      }
    });

    return admin

    console.log(snapshot)
}


/**
 * Edita un usuario de la base de datos
 * @param {*} usuario
 */
export function editarUsuario(usuario) {
  updateDoc(doc(db, 'usuarios' , usuario.id),{
    nombreUsuario: usuario.nombreUsuario,
    genero: usuario.genero,
  })
}


/**
 * Agrega un producto al arrays de compras
 * @param {*} usuario
 */
export function compraUsuario(producto, id) {
  console.log(producto)
  console.log(id)
  updateDoc(doc(db, 'usuarios' , id),{
    compras: arrayUnion(producto.nombre),
  })
}
