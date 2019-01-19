import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuQxB34izRPWRa_nCvV98DmkRv3gGFZzw",
  authDomain: "pizza-store-chernetsky.firebaseapp.com",
  databaseURL: "https://pizza-store-chernetsky.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;