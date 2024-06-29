import { db } from "../../firebaseConfig";

const plansReference = db.collection('Users');

export async function addUsersAcess(body: any){
    const response = await plansReference.add(body);
    return response;
}

export async function setUsersAcess(body:any, id: string){
    const response = await plansReference.doc(id).set(body);
    return response;
}

export async function updateUsersAcess(body:any, id: string){
    const response = await plansReference.doc(id).update(body);
    return response;
}

export async function getUsersAcess(){
    const response = await plansReference.get();
    return response;
}