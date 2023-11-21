import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'

function App() {

  return (
    <div>
      <Counter counterStart={0} plusMinus={3}/>
      <Greeting name="Tito"/>
    </div>
  )
}

export default App
