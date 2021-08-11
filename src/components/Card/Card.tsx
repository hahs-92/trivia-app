import React from "react"
//interface
import { QuestionState } from '../../utils/fetchData'
//components
import Item from '../Item/Item'

interface Props {
   data:QuestionState[],
   questionNumber: number,
   userAnswer: string,
   setUserAnswer: React.Dispatch<React.SetStateAction<string>>
   handleNext: () => void
}

const Card:React.FC<Props> = ({data, questionNumber, userAnswer, setUserAnswer, handleNext }) =>  {

    return(
        <article>
            <h2>{ data[questionNumber].question }</h2>
            <ul>
                {
                    data[questionNumber].answers.map((item, index) => (
                        <Item 
                            key={item} 
                            answer={item} 
                            index={index} 
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                            />
                    ))
                }

            </ul>
            { userAnswer &&<button onClick={ handleNext }>Next</button>}

        </article>
    )
}

export default Card