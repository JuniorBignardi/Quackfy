import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

export async function addPlansAcess(body: any){
    const response = await plansReference.add(body);
    return response;
}

export async function setPlansAcess(body:any, id: string){
    const response = await plansReference.doc(id).set(body);
    return response;
}

export async function updatePlansAcess(body:any, id: string){
    const response = await plansReference.doc(id).update(body);
    return response;
}

export async function getPlansAcess(){
    const response = await plansReference.get();
    return response;
}