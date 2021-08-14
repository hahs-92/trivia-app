import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//styles
import { ItemWrapper } from './ItemStyles'
//assets
import iconCorrect from '../../assets/images/comprobado.svg'
import iconError from '../../assets/images/cancelar.svg'
//actions-creator
import { setUserAnswer, CheckUserAnswer } from '../../actions/questionsCreators'
import { State } from '../../reducers'

interface Props  {
    answer: string,
    index: number,
    correct_answer: string
}

enum letterOptions {'A','B','C','D'}

const Item: React.FC<Props> = ({answer, index, correct_answer }) => {
    const [isClicked, setIsClicked ] = useState(false)
    const dispatch = useDispatch()
    const userAnswer = useSelector((state: State) => state.question.userAnswer)

    const handleClick = (e:React.MouseEvent<HTMLLIElement>) => {
        if(userAnswer) return 
        
        const answerUser = e.currentTarget.getAttribute('value') as string
        dispatch(setUserAnswer(answerUser))
        setIsClicked(true);

        (answer === correct_answer) && dispatch(CheckUserAnswer())
    }

    return(
       <ItemWrapper 
            correct={ userAnswer && answer === correct_answer ? true : false } 
            isClicked={isClicked} value={answer} 
            onClick={ handleClick }
            active={ userAnswer ? true : false}
        >
           <section className='Item-index'>
               <h2>{ letterOptions[index] }</h2>
           </section>
           <section className='Item-answer'>
               <h4 dangerouslySetInnerHTML={{__html: answer }}></h4>
           </section>
           <section className='Item-icon'>
               {
                   !userAnswer 
                    ? null
                    : answer === correct_answer 
                    ?  <img src={ iconCorrect } alt="check" />
                    : answer !== correct_answer && isClicked
                    ?   <img src={ iconError } alt="wrong" />
                    : null
               }
           </section>
       </ItemWrapper>
    )
}

export default Item