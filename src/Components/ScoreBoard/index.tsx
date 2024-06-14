import { Container, Content, Selector, Shadow } from "./styles"
import medal from "../../assets/medal.svg"



export function ScoreBoard({score_correct,score_incorrect}:{score_correct:number,score_incorrect:number}){

    return(
        <>
        <Container>
            <div>
                <p>RESULTADOS</p>
                <Content>
                    <img src={medal} alt="" />
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