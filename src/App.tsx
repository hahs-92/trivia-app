//hooks
import { useFetch } from "./hooks/useFetch";
//components
import Card from './components/Card/Card'
import { useState } from "react";

const App = () => {
  const { loading,error, data } = useFetch()
  const [ questionNumber, setQuestionNUmber] = useState(0)
  console.log(data)
  return (
    <section>
      { error && <h1>Something went wrong¡¡</h1>}
      { loading && <h1>Loading..</h1>}
      { data.length && <Card data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNUmber}/> }
    </section> 
  );
}

export default App;
