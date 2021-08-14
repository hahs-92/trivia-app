//action-types
import { ActionType } from './questionsTypes'
//
import { QuestionState } from '../utils/fetchData'

interface LoadingAction {
    type: ActionType.LOADING
}

interface ErrorAction {
    type: ActionType.ERROR
}

interface StartGameAction {
    type: ActionType.START_GAME,
    payload: string
}

interface ReStartGameAction {
    type: ActionType.RESTART_GAME,
}

interface NextQuestionAction {
    type: ActionType.NEXT_QUESTION
}

interface CheckUserAnswerAction {
    type: ActionType.CHECK_ANSWER
}

interface  GetDataAction {
    type: ActionType.GET_DATA,
    payload: QuestionState[]
}

interface  SetUserAnswerAction {
    type: ActionType.SET_USER_ANSWER,
    payload: string
}


export type Action = 
    StartGameAction | 
    ReStartGameAction | 
    NextQuestionAction | 
    CheckUserAnswerAction |
    LoadingAction |
    ErrorAction |
    GetDataAction |
    SetUserAnswerAction