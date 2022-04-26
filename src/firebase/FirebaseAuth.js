import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,signInWithPopup, signInAnonymously, onAuthStateChanged} from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import { collection, doc, getDocs, setDoc, query,where } from "@firebase/firestore";

const PathString= "USERS";
// Sign up using email and password

export function RegisterEmailPass(email, password)
// This is the firebase call that handles the auth of a new user sign up with our site. This call returns a promise of type FirebaseUser
{   
return createUserWithEmailAndPassword(FIREBASE_AUTH,email,password);
}

export function LogInEmailPass(email,password)
{
    return signInWithEmailAndPassword(FIREBASE_AUTH,email,password);
}

export function logout()
{
    signOut(FIREBASE_AUTH);
    window.location.replace("/");
}

export function SignInWithGoogle(){

    const provider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH,provider);
}

export function SignInAnon(){

    return signInAnonymously(FIREBASE_AUTH);
}

export async function CreateNewUser(uid,user)
{
    const isUser =user!== undefined && user !== null? true:false;
    const  dn = isUser && user.displayName!== null? user.displayName:"";

    //new user wanting to create
    const payload ={
        displayname:dn.length>0 ? dn: "",
        email: isUser? user.email:"",
        ProfileUrl: isUser && user.profileUrl ? user.profileUrl: "",
        uid:uid,
        role: "user"
    };

    //Firebase/ firestore implementation

    //this is a ref to a single document imp
    const Ref = collection(FIREBASE_FIRESTORE,PathString) //entire collectiom
    const docref =doc (FIREBASE_FIRESTORE,PathString,uid); //single document

                // sql query 
                //location, type of query ==where a==b
    const q =query(Ref, where("uid", "==", `${uid}`));
    const querySnapshot = await getDocs(q);
     console.log ("Q",q ,"QS", querySnapshot.docs.length);
     if(querySnapshot.docs.length==0)
     {
         await setDoc (docref,payload) //Can use adddoc
         .then((res)=>{
             console.log("RES",res);
         })
         .catch((err)=>{
        console.log("err",err);
         })
     }

}

//checking the state of the user after signed in

export function GetAuthState()
{

    //create a new promise(promises are asynchronous meaning running simultaneously)
                        //then ,//catch
    return new Promise((resolve,reject)=>{
        //local variable that we initialize with empty values
        let returnUser={
     
            displayName:"",
            email: "",
            profileUrl:  "",
            uid:"",
            role: ""
        
    };
            //firebase function                           //function as parameter
   return onAuthStateChanged(FIREBASE_AUTH,async function (user)
    {
        console.log("The user is:",user);//will be null or firebase user
        
        //checks if there is a user
        if(user !== null) 
     {  
         //query almost like sql query connection string
        const Ref = collection(FIREBASE_FIRESTORE,PathString) //entire collectiom
        const q = query(Ref, where("uid", "==", `${user.uid}`));
       
        // if query is matched it returns to us
        const querySnapshot = await getDocs(q);
        console.log ("Q",q ,"QS", querySnapshot.docs.length);

        if(querySnapshot.docs.length==0)
        {   //user does not exist so we create a user

            console.log("anon>>getauth>>>>Query >>return[] we are here now" )
           //now we enter here because we dont have a db user yet, still inside promise and has not resolved yet
            CreateNewUser(user.uid,user)
            .then(()=>{
                 returnUser={
                    displayName: user.displayName && user.displayName.length> 0 ? user.displayName:'',
                    email: user.email? user.email:"",
                    ProfileUrl: user.profileUrl && user.profileUrl ? user.profileUrl: "",
                    uid:user.uid,
                    role: "user"
                 }
                   // returnUser.displayName=user.displayName
                // returnUser.email=user.profileUrl
                // returnUser.profileUrl=user.profileUrl   //see create user payload

                 console.log("created user entry in db and will resolve our promise")
                 return resolve(returnUser);
                   })
                   .catch((err)=>{
                       reject(`Error has occurred: ${err}`);
                   });
          }
          else{
                // return our user value
                returnUser={
                    displayName: user.displayName&&  user.displayName.length > 0? user.displayName: "",
                    email: user.email? user.email:"",
                    ProfileUrl: user.profileUrl && user.profileUrl ? user.profileUrl: "",
                    uid:user.uid,
                    role: "user"
                 }
                 return resolve(returnUser);
          }
          resolve(returnUser);
    }


    }
    );
    })
   
   

    // return returnUser; placed this inside the code above
}