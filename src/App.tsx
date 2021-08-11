//hooks
import { useFetch } from "./hooks/useFetch";
//components
import Card from './components/Card/Card'
import { useEffect, useState } from "react";
import CardResult from "./components/CardResult/CardResult";

const App = () => {
  const { loading,error, data, cleanData } = useFetch()
  const [ questionNumber, setQuestionNumber] = useState(0)
  const [ userAnswer, setUserAnswer ] = useState("")
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(false)


  const handleNext = () => {
    setUserAnswer('');
    (questionNumber < data.length - 1) 
      ?  setQuestionNumber(prev => prev + 1) 
      :  setGameOver(true) 
  }

  const handleReStart = () => {
    cleanData()
    setGameOver(false)
    setQuestionNumber(0)
    setScore(0)
  }

  const checkUserAnswer = () => {
    if(userAnswer === data[questionNumber].correct_answer) {
      setScore(prev => prev + 1)
    }
  }

  useEffect(() => {
    if(userAnswer) checkUserAnswer()
  },[userAnswer])

  return (
    <section>
      <h1>Trivia App</h1>
      { error && <h1>Something went wrong¡¡</h1>}
      { loading && <h1>Loading...</h1>}

      { data.length > 0 && !gameOver &&
        <Card 
          data={data} 
          questionNumber={questionNumber} 
          setUserAnswer={ setUserAnswer}
          userAnswer={userAnswer}
          handleNext={ handleNext }
        /> 
      }
      { 
        gameOver && <CardResult score={ score } handleReStart={ handleReStart }/>
      }
    </section> 
  );
}

export default App;
