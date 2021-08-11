import React from "react"

interface Props  {
    answer: string,
    index: number,
    userAnswer: string
    setUserAnswer: React.Dispatch<React.SetStateAction<string>>,
}

enum letterOptions {'A','B','C','D'}

const Item: React.FC<Props> = ({answer, index,userAnswer, setUserAnswer }) => {

    const handleClick = (e:React.MouseEvent<HTMLLIElement>) => {
        setUserAnswer(e.currentTarget.getAttribute('value') as string)
    }

    return(
       <li value={answer} onClick={ handleClick }>
           <section>
               <h2>{ letterOptions[index] }</h2>
           </section>
           <section>
               <h4>{ answer }</h4>
           </section>
           <section>
               x
           </section>
       </li>
    )
}

export default Item