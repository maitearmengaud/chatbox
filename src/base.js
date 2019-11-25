/* lien entre mon application et firebase */
import Rebase from 're-base'
import firebase from 'firebase/app' // app firebase
import 'firebase/database' // partie database de firebase

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCeZA_i4YuzhjP5dmi9xbqCYwYnQjtBbsM',
    authDomain: 'chatbox-app-c8155.firebaseapp.com',
    databaseURL: 'https://chatbox-app-c8155.firebaseio.com'
})

// creatClass crée le lien entre base et firebase
const base = Rebase.createClass(firebase.database())

// on exporte 
export { firebaseApp }
export default base
