import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';


function App() {
  const [dogPerson, setdogperson]=useState({
    name: '',
    dog: '',
  })
  


  function handleClick(){
    console.log(dogPerson)
    setdogperson({name: "Shayanne", dog: "Rio"})
  }

  return (
    <div className="App">
      <Header name="Shayanne">I like react so far...kinda</Header>
      {/* <p>Counter: 0 </p> */}
      {/* <p>my name is {dogPerson.name} and my dog's name is {dogPerson.dog}</p>
      <button onClick={handleClick}>Display the names!</button> */}
      <Form/> 
    </div>
  );
}

export default App;
