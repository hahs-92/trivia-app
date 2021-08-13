//components
import CardStart from "./components/CardStart/CardStart";
import CardQuestions from './components/CardQuestions/CardQuestions'
import { useEffect, useState } from "react";
import CardResult from "./components/CardResult/CardResult";
//styles
import { AppWrapper } from './styles/AppStyles'
//utils
import {fetchData} from './utils/fetchData'
//interfaces
import { QuestionState } from './utils/fetchData'


const App = () => {
  const [ questionNumber, setQuestionNumber] = useState(0)
  const [ userAnswer, setUserAnswer ] = useState("")
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(false)
  const [ start, setStart ] = useState(false)
  const [ difficulty, setDifficulty ] = useState("")
  const [ data, setData ] = useState<QuestionState[]>([])
  const [loading, setLoading ] = useState(false)
  const [ error, setError] = useState(false)

  const startGame = async() => {
    setLoading(true)
    setStart(true)
    try {
      const questions = await fetchData(difficulty)
      setData(questions)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setLoading(false) 
    }
  }

  const handleNext = () => {
    setUserAnswer('');
    (questionNumber < data.length - 1) 
      ?  setQuestionNumber(prev => prev + 1) 
      :  setGameOver(true) 
  }

  const handleReStart = () => {
    setGameOver(false)
    setQuestionNumber(0)
    setScore(0)
    setStart(false)
    setData([])
  }

  const checkUserAnswer = () => {
    if(userAnswer === data[questionNumber].correct_answer) {
      setScore(prev => prev + 1)
    }
  }

  useEffect(() => {
    if(userAnswer) checkUserAnswer() // eslint-disable-next-line 
  },[userAnswer])


  return (
    <AppWrapper >
      {
        !start && 
          <CardStart difficulty={difficulty} setDifficulty={setDifficulty} handleStart={startGame}/>
      }
      { !gameOver && start &&
        <CardQuestions 
          data={data} 
          questionNumber={questionNumber} 
          setUserAnswer={ setUserAnswer}
          userAnswer={userAnswer}
          handleNext={ handleNext }
          error={error}
          loading={loading}
        />  
      }
      { 
        gameOver && 
          <CardResult score={ score } handleReStart={ handleReStart }/>
      }
      <footer className='Footer'>created by HAHS</footer>
    </AppWrapper> 
  );
}

export default App;
