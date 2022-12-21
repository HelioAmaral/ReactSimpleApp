import './App.css';
import AnimalShow from "./AnimalShow";
import { useState } from "react";



/********* THIS FUNCTION APP IS ONLY TO GIVE AN IDEA ON HOW STATE WORKS *******/ 
/*
function App() {
  //useState function is part of react library
  //we create two variables inside an array
  //count is the piece of state
  //setCount is the setter function, used to update the piece of state
  //when we want to update the piece of state we call the set function: setCount(count + 5)
  //useState(0) the default value for this piece of state
  //const [count, setCount] = useState(0);

  //const handleClick = () => {
    //When the user does something (click the button in this case) update the piece of state
    //in this case when the user clicks the button the function handleClick will be called and 
    //inside this function the setCount function is called which will update the count piece of 
    //state
    //setCount(count + 1);
  //};

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        Number of Animals: {count}!
        {/*the piece of state is used in our component in some way - often in the returned JSX*///}
     /* </div>
    </div>
  );
}*/

//******* THE ACTUAL APP **********/
//a function that will give us a random animal
function getRandomAnimal(){
    //a variable that contains the pool of animals to choose from randomly
    const animals = ['bird', 'cat', 'dog', 'cow', 'gator', 'horse'];
    //we look at the array pick up an animal randomly and return it
    return animals[Math.floor(Math.random()*animals.length)]
}

function App(){

    const[animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return(
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}


export default App;
