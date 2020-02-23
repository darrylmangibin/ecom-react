import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAcDFlJgzhB6Gld7X3PIdwpgIMwCjPQ1zg",
	authDomain: "ecom-darryl.firebaseapp.com",
	databaseURL: "https://ecom-darryl.firebaseio.com",
	projectId: "ecom-darryl",
	storageBucket: "ecom-darryl.appspot.com",
	messagingSenderId: "351721535171",
	appId: "1:351721535171:web:866d7bf24c86a7f857d476",
	measurementId: "G-RF57J4Y34Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
