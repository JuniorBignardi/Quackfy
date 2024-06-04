import { useEffect } from "react";
import Question from "../Components/Question";
import Answer from "../Components/Answer";
import Answer2 from "../Components/Answer2";
import Answer3 from "../Components/Answer3";
import Answer4 from "../Components/Answer4";
import {api} from "../services/api"

const Quiz = () => {

    useEffect(() => {
        api.get('')
        .then(response=> console.log(response.data))
    }, [])

    return(
        <>
        <Question question="abacaxi de banana"/>
        <Answer letter="A" answer="abacaxi de banana"/>
        <Answer2 letter="B" answer="abacaxi de banana"/>
        <Answer3 letter="C" answer="abacaxi de banana"/>
        <Answer4 letter="D" answer="abacaxi de banana"/>
        </>
    );
};

export default Quiz;