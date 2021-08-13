import { useSelector, useDispatch } from 'react-redux'
//components
import Card from '../Card/Card'
import Button from '../Button/Button'
//assest
import image from '../../assets/images/undraw_winners_ao2o 2.svg'
//styles
import { CardWrapper } from './CardResultsStyles'
//actions-creator
import { ReStartGame } from '../../actions/questionsCreators'
import { State } from '../../reducers'

// interface Props {
//     score: number,
//     handleReStart: () => void
// }

const CardResult = () => {
    const dispatch = useDispatch()
    const score = useSelector((state: State) => state.question.score)

    const handleClick = () => {
        dispatch(ReStartGame())
    }
    return(
        <Card>
            <CardWrapper>
                <section className='CardResults-image'>
                    <img src={image} alt="undraw_winners" />
                </section>
                <section className='CardResults-score'>
                    <h1>Results</h1>
                    <h2>You got  
                        <strong className='hightlight'> { score } </strong> correct answers
                    </h2>
                </section>
                <section className='CardResults-button'>
                    <Button title='Try again' handleClick={ handleClick }/>
                </section>
            </CardWrapper>
        </Card>
    )
}

export default CardResult