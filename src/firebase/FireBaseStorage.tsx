// import { ref, uploadBytes } from "@firebase/storage";
// import { FIREBASE_STORAGE } from "./FirebaseConfig";

// export async function UploadImagesAndGetUrl(images:ImageArr[]){
//     letUrlArr:string []=[];
//     await Promise.all(
//         images.map((entry))=>{
//             return new Promise<string[]>((resolve,reject)=> {
//                 let storageRef =ref(FIREBASE_STORAGE,`${entry.data.name}`);
//                 uploadBytes(storageRef,entry.data).then
//             })
//         }
//     )
// }