import { useQuiz } from "../../QuizContext";
import Answer from "../Answer";
import { Container } from "./styles";
import { decode } from "html-entities";

export function Question(){

    const letters = ["A","B","C","D"];

    const {state} = useQuiz();

    return(
        <>
        <Container>
                <div className="question-number">
                    <a  className="first" href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                </div>
                 <main className="questao">
                    <p>{decode(state.question?.question)}</p>
                 </main>
                <div className="options">
                    {state.question?.incorrect_answers.map(function(answer,indice){
                        return(
                             <Answer letter={letters[indice]} answer={answer}/>
                        )
                    })}
                </div>
         </Container>
        </>
    )
}

export default Question;