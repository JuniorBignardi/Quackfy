import { Container, Content, Selector, Shadow } from "./styles"
import medal from "../../assets/medal.svg"
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

export function ScoreBoard({score_correct}:{score_correct:number}){

    const navigate = useNavigate()
    const user = auth.currentUser
    
    var bool = false
    if(user == null){
        var bool = true;
    }
    
    useEffect(()=>{
        
        if(user != null){
            var resultRef = db.collection('Users').doc(user.uid);
            resultRef.get().then((doc) => {
                if(doc.exists){
                    resultRef.update({
                        value: firebase.firestore.FieldValue.increment((score_correct) *5)
                    });
                    if(doc.data()?.value < 0)
                        resultRef.update({
                            value: 0
                        }); 
                }
            }).catch((error) => {
                console.log("Error", error);
            })  
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
                        <p className="points">{(score_correct) *5} Pontos</p>
                    </Shadow>
                </Content>
            </div>
            <Selector>Reiniciar Quiz</Selector>
            <Selector disabled={bool || !user} onClick={()=>navigate('/ranking') }>Ranking</Selector>
        </Container>
        </>
    )
}

export default ScoreBoard