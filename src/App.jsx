
import Count from '../Counter'
import Effect from '../Effect'
import Team from '../State'
import './App.css'

function App() {
  function cByFunction(){
    alert('this is from the call by proper function')
  }
  const arrowFunction =()=>{
    alert('this is from the arrow function')
  }
  const arroww =(temp)=>{
    alert(temp + 5)

  }

  return (
    <>
    <Effect></Effect>
    <Team></Team>
      <h2>this is the even handelling section </h2>
      <Count></Count>
      <button onClick={cByFunction}>click mee</button>
      <button onClick={arrowFunction}>thiis is arrow function call</button>
      <button onClick={()=>alert('this is inside the onclick arrow function')}>onclickarrow</button>
      <button onClick={()=>arroww(5)}>fdfd</button>

    </>
  )
}

export default App
