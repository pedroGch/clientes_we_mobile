import {APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  APPID,
  MESSAGINGSENDERID,
  MASUREMENTID,
} from './../config.js'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey:APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  //measurementId: MASUREMENTID
}


export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
