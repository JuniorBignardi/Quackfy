import { Container, Content, Selector, Shadow } from "./styles"
import medal from "../../assets/medal.svg"
import { useEffect } from "react";
import { db } from "../../firebaseConfig";
import firebase from "firebase/compat/app";

export function ScoreBoard({score_correct,score_incorrect}:{score_correct:number,score_incorrect:number}){

    useEffect(()=>{
        var resultRef = db.collection('planos').doc('03H7ODzzudK5UnNm5zOX');
        resultRef.update({
            value: firebase.firestore.FieldValue.increment(((score_correct-score_incorrect)/2) *5)
        });
    },[])



    return(
        <>
        <Container>
            <div>
                <h1>RESULTADOS</h1>
                <Content>
                    <img src={medal} alt="imagem de uma medalha" />
                    <Shadow>
                        <p className="results">{score_correct/2}/5 Acertos</p>
                        <p className="points">{((score_correct-score_incorrect)/2) *5} Pontos</p>
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