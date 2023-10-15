import {APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  APPID,
  MESSAGINGSENDERID,
  MASUREMENTID,
} from '../../conf'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


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
export const auth = getAuth(app)
