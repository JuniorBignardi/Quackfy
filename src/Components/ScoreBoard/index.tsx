import { Container, Content, Selector, Shadow } from "./styles"
import medal from "../../assets/medal.svg"
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import firebase from "firebase/compat/app";

export function ScoreBoard({score_correct,score_incorrect}:{score_correct:number,score_incorrect:number}){

    useEffect(()=>{
        const user = auth.currentUser
        if(user != null){
            var resultRef = db.collection('Users').doc(user.uid);
            resultRef.update({
                value: firebase.firestore.FieldValue.increment((score_correct-score_incorrect) *5)
            });
        }
    },[])

    return(
        <>
        <Container>
            <div>
                <h1>RESULTADOS</h1>
                <Content>
                    <img src={medal} alt="imagem de uma medalha" />
                    <Shadow>
                        <p className="results">{score_correct}/5 Acertos</p>
                        <p className="points">{(score_correct-score_incorrect) *5} Pontos</p>
                    </Shadow>
                </Content>
            </div>
            <Selector>Reiniciar Quiz</Selector>
            <Selector>Ranking</Selector>
        </Container>
        </>
    )
}

export default ScoreBoard