import { Container, Content, Selector, Shadow } from "./styles"
import medal from "../../assets/medal.svg"
import { useQuiz } from "../../QuizContext";



export function ScoreBoard(){

    const {state,dispatch} = useQuiz();

    return(
        <>
        <Container>
            <div>
                <p>RESULTADOS</p>
                <Content>
                    <img src={medal} alt="" />
                    <Shadow>
                        <p className="results">{state.score.correct/2}/5 Acertos</p>
                        {
                            state.score.correct >= state.score.incorrect && <p className="points">+{(state.score.correct/2) *5} Pontos</p>
                            
                        }
                        {
                            state.score.correct < state.score.incorrect && <p className="points">-{(state.score.incorrect/2)* 5} Pontos</p>
                        }
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