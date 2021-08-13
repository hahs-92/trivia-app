import { useSelector } from "react-redux";
//components
import CardStart from "./components/CardStart/CardStart";
import CardQuestions from './components/CardQuestions/CardQuestions'
import CardResult from "./components/CardResult/CardResult";
//styles
import { AppWrapper } from './styles/AppStyles'
//actions-creator
import { State } from './reducers'


const App = () => {  
  const start = useSelector((state: State) => state.question.start)
  const gameOver = useSelector((state:State) => state.question.gameOver)

  return (
    <AppWrapper >
      { !start && <CardStart /> }
      { !gameOver && start && <CardQuestions /> }
      { gameOver && <CardResult /> }
      <footer className='Footer'>created by HAHS</footer>
    </AppWrapper> 
  );
}

export default App;
