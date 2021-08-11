import React from "react"
//interface
import { QuestionState } from '../../utils/fetchData'
//components
import Item from '../Item/Item'
//styles
import { Wrapper, WrapperButton } from './CardStyles'

interface Props {
   data:QuestionState[],
   questionNumber: number,
   userAnswer: string,
   setUserAnswer: React.Dispatch<React.SetStateAction<string>>
   handleNext: () => void
}

const Card:React.FC<Props> = ({data, questionNumber, userAnswer, setUserAnswer, handleNext }) =>  {

    return(
        <Wrapper>
            <ul>
            <h2>{ data[questionNumber].question }</h2>
                {
                    data[questionNumber].answers.map((item, index) => (
                        <Item 
                            key={item} 
                            answer={item} 
                            index={index} 
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                            correct_answer={data[questionNumber].correct_answer}
                        />
                    ))
                }

            </ul>
            {
                <WrapperButton visible={userAnswer ? true : false}>
                    <button onClick={ handleNext }>Next</button>
                </WrapperButton>
            }

        </Wrapper>
    )
}

export default Card