import { createContext, useContext, useReducer } from "react";


export interface QuestionGet{
    category: string;
    type: "multiple" | "boolean";
    difficulty: "easy"| "medium" | "hard";
    question: string;
    correct_answer: string;
    incorrect_answers: string[];

}

export interface QuestionResponse{
    response_code: number;
    results: QuestionGet[];
}


interface Score{
    correct: number,
    incorrect: number,
}

interface QuizContext{
    state: QuizState,
    dispatch: React.Dispatch<QuizAction> 
}


type Status = "idle"|"fetching"|"ready"|"error"|"answered";

interface QuizState {
    gameStatus: Status,
    question: QuestionGet|null,
    userAnswer: string|null,
    score: Score,
};

type QuizAction = 
{type: "setStatus"; payload: Status} | {type: "setQuestionGet"; payload: QuestionGet } | {type: "setUserAnswer", payload: string}
| {type: "setScore"; payload:"correct" | "incorrect"} | {type: "ResetScore"; payload: 0}

const initialState :  QuizState = {
    gameStatus: "idle",
    question: null,
    userAnswer: null,
    score: {correct: 0, incorrect:0},
}

const QuizContext = createContext<QuizContext>({
    state: initialState,
    dispatch: ()=>null
})

export function QuizProvider({children}: {children: React.ReactElement}){
    const [state, dispatch] = useReducer(QuizReducer, initialState);

    return(
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    return useContext(QuizContext);
}

function QuizReducer(state: QuizState, action: QuizAction): QuizState{
    switch (action.type){
        case "setStatus":
            return {...state, gameStatus: action.payload};
        case "setQuestionGet":
            return {...state, question: action.payload};
        case "setUserAnswer":
            return {...state, userAnswer: action.payload};
        case "setScore":
            let score = state.score;
            score[action.payload] +=1;
            return {...state, score: score};
        case "ResetScore":
            let null_score = state.score;
            null_score["correct"] = action.payload;
            null_score["incorrect"] = action.payload;
            return {...state,score: null_score};
    }
}