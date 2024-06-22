import { createContext, useContext, useReducer } from "react";

interface AnswerHistory{
    questionIndex: number;
    isCorrect: boolean;
}



export interface QuestionGet{
    category: string;
    type: "multiple" | "boolean";
    difficulty: "easy"| "medium" | "hard";
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answerHistory: AnswerHistory[];

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
    questions: QuestionGet[],
    currentQuestionIndex: number,
    userAnswer: string|null,
    score: Score,
    answerHistory: AnswerHistory[];
};

type QuizAction = 
{type: "setStatus"; payload: Status} | {type: "setQuestionGet"; payload: QuestionGet[] } | {type: "setUserAnswer", payload: string}
| {type: "setScore"; payload:"correct" | "incorrect"} |{type:"nextQuestion"} | {type: "ResetScore"; payload: 0} | {type: "addAnswerHistory";payload: AnswerHistory}
| {type: "resetQuiz"};

const initialState :  QuizState = {
    gameStatus: "idle",
    questions: [],
    currentQuestionIndex: 0,
    userAnswer: null,
    score: {correct: 0, incorrect:0},
    answerHistory: [],
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
            return {...state, questions: action.payload,currentQuestionIndex: 0};
        case "setUserAnswer":
            return {...state, userAnswer: action.payload};
        case "setScore":
            let score = state.score;
            score[action.payload] +=1;
            return {...state, score: score};
        case "nextQuestion":
            return {...state, currentQuestionIndex: state.currentQuestionIndex + 1, userAnswer: null}
        case "ResetScore":
            let null_score = state.score;
            null_score["correct"] = action.payload;
            null_score["incorrect"] = action.payload;
            return {...state,score: null_score};
        case "resetQuiz":
            return {...initialState};
        case "addAnswerHistory":
            return {...state,answerHistory: [...state.answerHistory, action.payload]};
    }
}