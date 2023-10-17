import { db } from "./firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

/**
 *
 * @param {string} id
 * @return {Promise<{id: string, email:string}>}
 */
export async function obtenerUsuarioPorId(id) {
  const refUser = doc(db, `usuarios/${id}`);
  const docSnapshot = await getDoc(refUser);

  return {
      id: docSnapshot.id,
      email: docSnapshot.data().email,
      rol: docSnapshot.data().rol
  }
}

/**
 *
 * @param {string} id
 * @param {{email: string}} data
 * @return {Promise}
 */
export async function crearPerfilDeUsuario(id, data) {
  const refUser = doc(db, `usuarios/${id}`);
  return setDoc(refUser, {...data, created_at: serverTimestamp()});
}
