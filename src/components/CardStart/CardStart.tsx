//assest
import imageTrivia from '../../assets/images/quiz.svg'
//styles
import { CardStartWrapper } from './CardStartStyles'
//components
import Card from '../Card/Card'
import { ButtonAction } from '../Button/Button'


interface Props {
    difficulty: string,
    setDifficulty: React.Dispatch<React.SetStateAction<string>>,
    handleStart: () => void
}

const CardStart: React.FC<Props> = ({difficulty,setDifficulty, handleStart}) => {

    const handleClick = (e:React.MouseEvent<HTMLLIElement>) => {
        const d = e.currentTarget.getAttribute('value')
        setDifficulty(d as string)
    }

    const handleStartGame = () => {
        handleStart()
    }
    return(
        <Card >
            <CardStartWrapper>
                <section className='CardStart-image'>
                    <img src={ imageTrivia } alt="Trivia" />
                </section>
                <section className='CardStart-difficulty'>
                    <ul>
                        <li 
                            className={ (difficulty === 'easy' )? 'select' : '' }
                            value='easy' 
                            onClick={handleClick}
                        >Easy</li>
                        <li 
                            className={ (difficulty === 'medium' )? 'select' : '' }
                            value= 'medium' 
                            onClick={handleClick}
                        >Medium</li>
                        <li 
                            className={ (difficulty === 'hard' )? 'select' : '' }
                            value='hard' 
                            onClick={handleClick}
                        >Hard</li>
                    </ul>
                </section>
                {
                    difficulty &&
                        <section className='CardStart-button'>
                            <ButtonAction title='Start' handleClick={handleStartGame} />
                        </section>
                }
            </CardStartWrapper>
        </Card>
    )
}

export default CardStart