import React from "react"
//interface
import { Data } from '../../hooks/useFetch'
//utils
import { shuffleArray } from '../../utils/sortRandom'
//components
import Item from '../Item/Item'

interface Props {
   data: Data[],
   questionNumber: number,
   setQuestionNumber: React.Dispatch<React.SetStateAction<number>>
}

const Card:React.FC<Props> = ({data, questionNumber,setQuestionNumber}): JSX.Element =>  {
    const answers = [...data[questionNumber].incorrect_answers, data[questionNumber].correct_answer]
    const answers_random: string[] = shuffleArray(answers)

    return(
        <section>
            <h2>{ data[questionNumber].question }</h2>
            <ul>
                {
                    answers_random.map(item => (
                        <Item key={item} answer={item} />
                    ))
                }

            </ul>
            { questionNumber < 9 &&
                <button onClick={() => setQuestionNumber(prev => prev + 1)}>Next</button>
            }
        </section>
    )
}

export default Card