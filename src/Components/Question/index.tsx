import { useQuiz } from "../../QuizContext";
import { Container, Content } from "./styles";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import correctsound from "/sounds/bonus-points-190035.mp3"
import incorrectsound from "/sounds/273643-Negative-alert-3.wav"
import { Loading } from "../Loading";
import { createClient } from 'pexels';


// All requests made with the client will be authenticated


export function Question(){

    const letters = ["A","B","C","D"];

    const navigate = useNavigate();

    const {state,dispatch} = useQuiz();

    const currentQuestion = state.questions[state.currentQuestionIndex];

    let correctAnswerAudio = new Audio(correctsound);
    let incorrectAnswerAudio = new Audio(incorrectsound);
    

    function handleAnswer(answer: string){
        const isCorrect = answer === currentQuestion.correct_answer;

        if(isCorrect){
            dispatch({type: "setScore", payload: "correct"});
            correctAnswerAudio.play();
        }else{
            dispatch({type:"setScore",payload: "incorrect"});
            incorrectAnswerAudio.play();
        }

        dispatch({type:"setUserAnswer", payload:answer})
        dispatch({type: "addAnswerHistory",payload: {questionIndex: state.currentQuestionIndex, isCorrect}});
        dispatch({type:"setStatus", payload:"answered"})
        setTimeout(() => {
            if(state.currentQuestionIndex === state.questions.length - 1){
                let score_correct = state.score.correct;
                let score_incorrect = state.score.incorrect;
                navigate('/results',{state:{score_correct: score_correct,score_incorrect:score_incorrect}})
                dispatch({type:"setStatus", payload:"idle"})
                dispatch({type:"ResetScore",payload:0})
            }else{
                dispatch({type: "nextQuestion"});
            }
        }, 1000);

    }

    if(!currentQuestion){
        return <Loading/>
    }

    return(
        <>
        <Container>
                <div className="question-number">
                    {state.questions.map((question,index)=>{
                        console.log(question)
                        const history = state.answerHistory.find((h)=>h.questionIndex===index);
                        let className = "";
                        if(history){
                            className = history.isCorrect ? "correct" : "incorrect";
                        }
                       return <a key={index} className={index === state.currentQuestionIndex ? `first ${className}`: className}>{index +1} </a>
                    })}
                </div>
                 <main className="questao">
                    <p>{decode(currentQuestion.question)}</p>
                 </main>
                <div className="options">
                    {currentQuestion.incorrect_answers.map(function(answer,indice){
                        return(
                            <Content key={indice} className={`${state.gameStatus == "answered" && answer === state.userAnswer && answer === currentQuestion.correct_answer && 'correct'} ${state.gameStatus == "answered" && state.userAnswer !== null && answer !== currentQuestion.correct_answer && 'incorrect'} ${state.gameStatus == "answered" && state.userAnswer !== null && answer !== state.userAnswer && answer === currentQuestion.correct_answer && 'correct'}`} onClick={()=>{handleAnswer(answer)}}>
                                <p>{letters[indice]}. {decode(answer)}</p>
                            </Content>
                        )
                    })}
                </div>
         </Container>
        </>
    )
}

export default Question;