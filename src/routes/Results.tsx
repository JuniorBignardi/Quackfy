import ScoreBoard from "../Components/ScoreBoard";


const Results = () =>{
    
    let ResultsAudio = new Audio('./sounds/goodresult-82807.mp3');
    ResultsAudio.play();

    return(
        <>
            <ScoreBoard/>
        </>
    )
}

export default Results