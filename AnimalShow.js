import './AnimalShow.css';
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

//create an object with all the animals svgs to use
const svgMap = {
  //when the key is equal to value we can use just the key ex: bird: bird, we cand do just bird,
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};

//below AnimalShow takes type as prop, it will return an image from the object svgMap[type]
// meaning it will match the type from props with the svg from the svgMap
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt="animal" src={svgMap[type]} />
      <img className='heart' alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px'}} />
    </div>
  );
}

export default AnimalShow;
