import { DocumentReference, addDoc, collection, getDoc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "./firebase";

const privateChatRefCache = {};

/**
 *
 * @param {{senderId: string, receiverId: string, message: string}} data
 * @returns {Promise}
 */
export async function enviarMensajePrivado({senderId, receiverId, message}) {
    const privateChatDoc = await getPrivateChatDoc({senderId, receiverId});

    const messagesRef = collection(db, `chat-privado/${privateChatDoc.id}/mensajes`);

    await addDoc(messagesRef, {
        senderId,
        message,
        created_at: serverTimestamp(),
    });
    return true;
}

/**
 *
 * @param {{senderId: string, receiverId: string}} users
 * @param {({}[]}) => void} callback
 * @returns {Promise<import("firebase/auth").Unsubscribe>}
 */
export async function suscribirAChatPrivado({senderId, receiverId}, callback) {
    const privateChatDoc = await getPrivateChatDoc({senderId, receiverId});

    const messagesRef = collection(db, `chat-privado/${privateChatDoc.id}/mensajes`);

    const q = query(
        messagesRef,
        orderBy('created_at')
    );

    return onSnapshot(q, snapshot => {
        const mensajes = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                senderId: doc.data().senderId,
                message: doc.data().message,
                created_at: doc.data().created_at?.toDate(),
            }
        });

        callback(mensajes);
    });
}

/**
 *
 * @param {{senderId: string, receiverId: string}} users
 * @returns {Promise<DocumentReference>}
 */
async function getPrivateChatDoc({senderId, receiverId}) {
    const cachedRef = getFromCache({senderId, receiverId});
    if(cachedRef) {
      return cachedRef;
    }
    const privateChatRef = collection(db, 'chat-privado');
    const q = query(
      privateChatRef,
      where('users', '==', {
        [senderId]: true,
        [receiverId]: true,
      }),
      limit(1),
    );
    const snapshot = await getDocs(q);
    let privateChatDoc;

    if(snapshot.empty) {

        privateChatDoc = await addDoc(privateChatRef, {
            users: {
                [senderId]: true,
                [receiverId]: true,
            }
        });
    } else {
        privateChatDoc = snapshot.docs[0];
    }

    addToCache({senderId, receiverId}, privateChatDoc);

    return privateChatDoc;
}

function addToCache({senderId, receiverId}, value) {
    privateChatRefCache[getKeyForCache()] = value;
}

function getFromCache({senderId, receiverId}) {
    return privateChatRefCache[getKeyForCache()] || null;
}

function getKeyForCache({senderId, receiverId}) {
    return senderId + receiverId;
}
