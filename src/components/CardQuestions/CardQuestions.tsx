import { useSelector, useDispatch } from "react-redux"
//components
import Card from '../Card/Card'
import Item from '../Item/Item'
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { ButtonAction } from '../Button/Button'
//styles
import { Wrapper, WrapperButton } from './CardQuestionsStyles'
//actions-creator
import { nextQuestion } from '../../actions/questionsCreators'
import { State } from '../../reducers'

// interface Props {
//    data:QuestionState[],
//    questionNumber: number,
//    userAnswer: string,
//    setUserAnswer: React.Dispatch<React.SetStateAction<string>>
//    handleNext: () => void,
//    error: boolean,
//    loading: boolean
// }

const CardQuestions = ( ) =>  {
    const dispatch = useDispatch()

    const data = useSelector((state: State) => state.question.data)
    const error = useSelector((state:State) => state.question.error)
    const loading = useSelector((state:State) => state.question.loading)
    const userAnswer = useSelector((state:State) => state.question.userAnswer)
    const questionNumber = useSelector((state:State) => state.question.questionNumber)

    const handleNext = () => {
        // (questionNumber < data.length - 1) 
        // ?  dispatch(nextQuestion())
        // :  setGameOver(true) 
        dispatch(nextQuestion())
    }

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
                                    correct_answer={data[questionNumber].correct_answer}
                                />
                            ))
                        }

                    </ul>
                    {
                        <WrapperButton>
                            <ButtonAction 
                                title='Next' 
                                handleClick={ handleNext } 
                                isDisable= {!userAnswer ? true : false} 
                            />
                        </WrapperButton>
                    }

                </Wrapper>
            }
        </Card>
    )
}

export default CardQuestions