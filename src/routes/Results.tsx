import ScoreBoard from "../Components/ScoreBoard";
import { useLocation } from "react-router-dom";

const Results = () =>{
    
    let ResultsAudio = new Audio('./sounds/goodresult-82807.mp3');
    ResultsAudio.play();

    const {state} = useLocation();

    const {score_correct} = state;

    return(
        <>
            <ScoreBoard score_correct={score_correct}/>
        </>
    )
}

export default Results