
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.js';
import {crearPerfilDeUsuario} from './usuarios'

let userData = {
    id: null,
    email: null,
    rol: null,
    nombreUsuario: null,
    genero: null,
}
let observers = [];

if (localStorage.getItem('user')){
  userData = JSON.parse(localStorage.getItem('user'))
}

/**
 *
 * @param {{email:string, password:string, rol:string}} user
 * @return {Promise}
 */
export async function register({email, password, rol, nombreUsuario, genero}) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    crearPerfilDeUsuario(userCredentials.user.uid, {email, rol, nombreUsuario, genero})
    return {
      id : userCredentials.user.uid,
      email: userCredentials.user.email,
      rol: userCredentials.user.rol,
      nombreUsuario: userCredentials.user.nombreUsuario,
      genero: userCredentials.user.genero
    }
  } catch (error) {
    return {
      code: error.code,
      message: error.message,
    }
  }

}

/**
 * Función que se ejecuta cuando el estado de autenticación cambia.
 * Recibe como argumento una función que recibe como argumento un objeto con los datos del usuario. Si no hay usuario, el objeto es null.
 * @param {(user: {id: null|string, email: null|string}) => void} callback
 * @return {() => void}
 */
onAuthStateChanged(auth, user => {
  if (user){
    setUserData({
      id: user.uid,
      email: user.email,
      // rol: user.rol
    })
    localStorage.setItem('user', JSON.stringify(userData))
  }else{
    clearUserData()
    localStorage.removeItem('user')
  }
})

/**
 * Inicia sesión.
 *
 * @param {{email: string, password: string}} user
 * @return {Promise}
 */
export async function login({email, password}) {
  return signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            return {...userData};
        })
        .catch(error => {
            return {
                code: error.code,
                message: error.message,
            }
        });
}

/**
 * Cierra sesión.
 * @returns {Promise}
 */
export function logout() {
    return signOut(auth);
}

/**
 * Agrega un observer (callback) para ser notificado de los cambios en el estado de autenticación.
 * El observer debe ser una función que reciba como argumento un objeto y no retorne nada.
 *
 * @param {({id: null|string, email: null|string, rol: null|string}) => void} observer
 * @returns {() => void}
 */
export function subscribeToAuth(observer) {
    // Agregamos el observer a la lista.
    observers.push(observer);

    // Ejecutamos el observer inmediatamente con la data actual.
    notify(observer);

    return () => {
      observers = observers.filter(obs => obs !== observer)
    }
}

/**
 * Notifica a todos los observers de los datos de la autenticación.
 */
function notifyAll() {
    observers.forEach(observer => notify(observer));
}

/**
 * Notifica a un observador de los datos.
 * @param {({id: null|string, email: null|string}) => void} observer
 */
function notify(observer) {
    observer({...userData});
}

/**
 * Actualiza los datos del usuario.
 * @param {{id: null|string, email: null|string}} newData
 */
function setUserData(newData) {
    userData = {
        ...userData,
        ...newData,
    }
    notifyAll();
}

/**
 * Elimina los datos del usuario.
 */
function clearUserData() {
    setUserData({
        id: null,
        email: null,
        rol:null,
        nombreUsuario:null,
        genero:null
    });
}

/**
 * Obtiene los datos del usuario.
 * @returns {{id: null|string, email: null|string}}
 */
export function getUserData() {
    return {...userData};
}
