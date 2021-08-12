import React, { useState } from "react"
//styles
import { ItemWrapper } from './ItemStyles'
//assets
import iconCorrect from '../../assets/images/comprobado.svg'
import iconError from '../../assets/images/cancelar.svg'

interface Props  {
    answer: string,
    index: number,
    userAnswer: string
    setUserAnswer: React.Dispatch<React.SetStateAction<string>>,
    correct_answer: string
}

enum letterOptions {'A','B','C','D'}

const Item: React.FC<Props> = ({answer, index,userAnswer, setUserAnswer, correct_answer }) => {
    const [isClicked, setIsClicked ] = useState(false)

    const handleClick = (e:React.MouseEvent<HTMLLIElement>) => {
        const answerUser = e.currentTarget.getAttribute('value') as string
        if(userAnswer) return 
        setUserAnswer(answerUser)
        setIsClicked(true)
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