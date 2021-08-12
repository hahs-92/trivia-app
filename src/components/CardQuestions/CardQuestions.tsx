import React from "react"
//interface
import { QuestionState } from '../../utils/fetchData'
//components
import Card from '../Card/Card'
import Item from '../Item/Item'
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
//styles
import { Wrapper, WrapperButton } from './CardQuestionsStyles'

interface Props {
   data:QuestionState[],
   questionNumber: number,
   userAnswer: string,
   setUserAnswer: React.Dispatch<React.SetStateAction<string>>
   handleNext: () => void,
   error: boolean,
   loading: boolean
}

const CardQuestions:React.FC<Props> = (
    {data, questionNumber, userAnswer, setUserAnswer, handleNext, error, loading }) =>  {

    return(
        <Card>
            { error && <Error /> }
            { loading && <Loader />} 
            { !error && !loading &&
                <Wrapper>
                    <section>
                        <h2 dangerouslySetInnerHTML={{__html: data[questionNumber].question}}></h2> 
                    </section>
                    <ul>
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
            }
        </Card>
    )
}

export default CardQuestions