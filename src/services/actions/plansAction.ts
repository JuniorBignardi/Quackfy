import { addUsersAcess, getUsersAcess, setUsersAcess, updateUsersAcess } from "../dataAcess/usersAcess";

export async function addUsersAction(body: any){
    const response = await addUsersAcess(body);
    return response.id;
}

export async function setUsersAction(body: any, id: string){
    const response = await setUsersAcess(body, id);
    return response;
}

export async function updateUsersAction(body: any, id: string){
    const response = await updateUsersAcess(body, id);
    return response;
}

export async function getUsersAction(){
    const response = await getUsersAcess();
    const plans: any[] = [];
    response.forEach((doc) => {
        plans.push(doc.data())
    });
    return plans;
}