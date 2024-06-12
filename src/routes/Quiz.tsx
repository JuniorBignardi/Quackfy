import { useEffect } from "react";
import Question from "../Components/Question";
import { useQuiz, QuestionGet, QuestionResponse } from "../QuizContext";

const Quiz = () => {

    const {state, dispatch} = useQuiz();
    console.log(state);

    async function fetchQuestion() {
        try {
            dispatch({type: "setStatus", payload: "fetching"})
            const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
            let data : QuestionResponse = await(response.json())
            if(data.response_code === 0){
                let question : QuestionGet = data.results[0];

                let randomIndex = Math.round(Math.random() * question.incorrect_answers.length)
                question.incorrect_answers.splice(randomIndex,0,question.correct_answer)
                
                dispatch({type: "setStatus", payload: "ready"})
                dispatch({type: "setQuestionGet", payload: question})
            } else{
            dispatch({type: "setStatus", payload: "error"})
            }
            console.log("data", data)
        }catch (err){
            console.log("error: ", err)
        }
        
    }

    useEffect(() => {
       if(state.gameStatus =='idle'){
        fetchQuestion();
       }
    })

    return(
        <>
        <Question/>
        </>
    );
};

export default Quiz;