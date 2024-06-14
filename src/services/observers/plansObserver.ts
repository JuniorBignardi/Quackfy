import React from 'react';
import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

export function getPlansObserver(callback: React.Dispatch<React.SetStateAction<any[]>>, plansType: string[]){
    const gymReference = db.doc('user/jacarubu')
    plansReference.where('type', 'in', plansType).where('user', '==', gymReference).onSnapshot((snapshot)=>{
        const plans: any[] = [];
        snapshot.forEach((doc)=>{
            plans.push(doc.data())
        })
        callback(plans);
    })
}