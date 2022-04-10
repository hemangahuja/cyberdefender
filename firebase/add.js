import initFirebase from "./init";
import { getFirestore , doc , setDoc } from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const addToFirestore = async (data) => {
   try{
    const docRef = doc(db,"registrants",data.registrationNumber);
    await setDoc(docRef,data);
   }
    catch(error){
        console.log(error);
    }
}

export default addToFirestore;