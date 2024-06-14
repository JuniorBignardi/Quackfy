import { Container } from "./styles";
import { decode } from "html-entities";
import { useQuiz } from "../../QuizContext";
import { useNavigate } from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

type Props = {
    letter: any;
    answer: string;
}

let counter = 0;

const Answer: React.FC<Props> = ({letter, answer}) => {
    const {state,dispatch} = useQuiz();
    const navigate = useNavigate();

    let correctAnswerAudio = new Audio('./sounds/bonus-points-190035.mp3');
    let incorrectAnswerAudio = new Audio('./sounds/public_sounds_lost.wav');

    function handleAnswer(answer: string){
        counter +=1;
        console.log(counter)
        dispatch({type:"setUserAnswer", payload:answer})
        if(answer == state.question?.correct_answer){
            dispatch({type:"setScore",payload:"correct"})
            correctAnswerAudio.play();
            confetti();
        }else{
            dispatch({type:"setScore",payload:"incorrect"})
            incorrectAnswerAudio.play();
        }
        dispatch({type:"setStatus", payload:"answered"})
        setTimeout(() => {
            if(counter == 5){
                let score_correct = state.score.correct;
                let score_incorrect = state.score.incorrect;
                navigate('/results',{state:{score_correct: score_correct,score_incorrect:score_incorrect}})
                dispatch({type:"setStatus", payload:"idle"})
                dispatch({type:"ResetScore",payload:0})
                counter = 0;
            }else{
                dispatch({type:"setStatus", payload:"idle"})
            }
        }, 5000);

    }

    return(
        <Container className={`${state.gameStatus == "answered" && answer === state.userAnswer && answer === state.question?.correct_answer && 'correct'} ${state.gameStatus == "answered" && state.userAnswer !== null && answer !== state.question?.correct_answer && 'incorrect'} ${state.gameStatus == "answered" && state.userAnswer !== null && answer !== state.userAnswer && answer === state.question?.correct_answer && 'correct'}`} onClick={()=>{handleAnswer(answer)}}>
                <p>{letter}. {decode(answer)}</p>
        </Container>
    )
}

export default Answer;