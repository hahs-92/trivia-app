//components
import Card from '../Card/Card'
//assest
import image from '../../assets/images/undraw_winners_ao2o 2.svg'
//styles
import { CardWrapper } from './CardResultsStyles'
interface Props {
    score: number,
    handleReStart: () => void
}

const CardResult: React.FC<Props> = ({score, handleReStart}) => {
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
                    <button onClick={ handleReStart }>Try again</button>
                </section>
            </CardWrapper>
        </Card>
    )
}

export default CardResult