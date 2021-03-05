import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
    .collection("users")
    .doc("mibvxVj05J1OpBawSwbh")
    .collection("cartItems")
    .doc("a8lKlEU5QVFjyyufxzd7");
firestore.doc("/users/mibvxVj05J1OpBawSwbh/cartItems/a8lKlEU5QVFjyyufxzd7");
firestore.collection("/users/mibvxVj05J1OpBawSwbh/cartItems/");
