//utils
import { shuffleArray } from './sortRandom'

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionState = Question & { answers: string[] }

export const fetchData = async() =>  {
    const data= await (await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')).json()
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }
    ))
}