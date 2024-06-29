import { useEffect } from "react";
import Question from "../Components/Question";
import { useQuiz, QuestionResponse } from "../QuizContext";
import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";

const Quiz = () => {

    const {category, difficulty} = useParams();


    const {state, dispatch} = useQuiz();
    console.log(state);


    async function fetchQuestion(category:any,difficulty:any) {
        try {
            console.log("eu to aqui")
            dispatch({type: "setStatus", payload: "fetching"})
            const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
            let data : QuestionResponse = await(response.json())
            if(data.response_code === 0){
                const questions = data.results.map((question)=>{
                    let randomIndex = Math.round(Math.random() * question.incorrect_answers.length)
                    question.incorrect_answers.splice(randomIndex,0,question.correct_answer)
                    return question;
                })
                dispatch({type: "setQuestionGet",payload:questions});
                dispatch({type: "setStatus", payload: "ready"})
            } else{
                dispatch({type: "setStatus", payload: "error"})
                setTimeout(() => {
                    fetchQuestion(category,difficulty)
                },5000);
            }
            console.log("data", data)
        }catch (err){
            console.log("error: ", err)
        }
        
    }

    useEffect(() => {
       if(state.gameStatus =='idle'){
        fetchQuestion(category,difficulty);
       }

       return () =>{
            dispatch({type: "resetQuiz"});
            dispatch({type: "setStatus",payload:"idle"});
            dispatch({type: "ResetScore",payload:0});

       }
    },[category,difficulty]);

    return(
        <>
        {state.gameStatus === "ready" ||state.gameStatus === "answered" ? <Question/> : <Loading/> }
        </>
    );
};

export default Quiz;