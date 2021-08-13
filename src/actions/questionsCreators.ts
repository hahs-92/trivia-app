//types-actions
import { ActionType } from './questionsTypes'
//actions
import { Action } from '../actions'
//redux
import { Dispatch } from 'redux'
//utils
import { fetchData } from '../utils/fetchData'


export const startGame = (difficulty: string) => async(dispatch: Dispatch<Action>) => {
 
    dispatch({
        type: ActionType.LOADING
    })

    dispatch({
        type: ActionType.START_GAME,
        payload: difficulty
    })

    try {
        const data = await fetchData(difficulty)
        dispatch({
            type: ActionType.GET_DATA,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ActionType.ERROR
        })
    }
}

export const nextQuestion = () => {
    return(dispatch: Dispatch) => {
        dispatch({
            type: ActionType.NEXT_QUESTION
        })  
    }
}

export const setUserAnswer= (userAnswer: string) => {
    return( dispatch: Dispatch) => {
        dispatch({
            type: ActionType.SET_USER_ANSWER,
            payload: userAnswer
        })
    }
}

export const CheckUserAnswer= () => {
    return( dispatch: Dispatch) => {
        dispatch({
            type: ActionType.CHECK_ANSWER
        })
    }
}

export const ReStartGame = ()  => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.RESTART_GAME
        })
    }
}
