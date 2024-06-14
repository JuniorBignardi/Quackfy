import { addPlansAcess, setPlansAcess, updatePlansAcess, getPlansAcess } from "../dataAcess/plansAcess";

export async function addPlansAction(body: any){
    const response = await addPlansAcess(body);
    return response.id;
}

export async function setPlansAction(body: any, id: string){
    const response = await setPlansAcess(body, id);
    return response;
}

export async function updatePlansAction(body: any, id: string){
    const response = await updatePlansAcess(body, id);
    return response;
}

export async function getPlansAction(){
    const response = await getPlansAcess();
    const plans: any[] = [];
    response.forEach((doc) => {
        plans.push(doc.data())
    });
    return plans;
}