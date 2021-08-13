//interface
import { QuestionState } from '../utils/fetchData'
//ACTION
import { Action } from '../actions'
//actions-types
import { ActionType } from '../actions/questionsTypes'

export interface StateInitial {
    loading: boolean,
    error: boolean,
    start: boolean,
    score: number,
    gameOver: boolean,
    difficulty: string,
    questionNumber: number,
    userAnswer: string,
    data: QuestionState[]
}

const INITIAL_STATE = {
    loading: false,
    error: false,
    start: false,
    score: 0,
    gameOver: false,
    difficulty: '',
    questionNumber: 0,
    userAnswer: '',
    data: [
        {
            category: '',
            correct_answer: '',
            difficulty: '',
            incorrect_answers: [''],
            question: '', 
            type: '',
            answers: ['']
        }
    ]
}

export const questionReducer = (state: StateInitial = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.ERROR:
            return { ...state, error: true , loading: false }
        case ActionType.LOADING:
            return { ...state, loading: true }
        case ActionType.START_GAME:
            return { 
                ...state , start: true, difficulty: action.payload
            }
        case ActionType.GET_DATA:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        case ActionType.NEXT_QUESTION:
            const gameOver = state.questionNumber >= state.data.length - 1
            if(gameOver){
                return { ...state, gameOver: true }
            } else {
                return { 
                    ...state, questionNumber: state.questionNumber + 1, userAnswer: ''  
                }
            }
        case ActionType.SET_USER_ANSWER:
            return {
                ...state,
                userAnswer: action.payload
            }
        case ActionType.CHECK_ANSWER:
            return {
                ...state,
                score: state.score + 1
            }
        case ActionType.RESTART_GAME:
            return {
                ...state, 
                gameOver: false,
                score: 0,
                questionNumber: 0,
                start: false,
                userAnswer: '',
                data: []
            }
        default:
            return state
    }

}