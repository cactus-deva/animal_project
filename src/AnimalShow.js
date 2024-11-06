import { useState } from "react";
import "./AnimalShow.css"
import bird from "./svg/bird.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg"; 
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

//dog.svg doesn't display

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" className="animal" />
      <img 
      src={heart} 
      alt="heart" 
      style={{ width: 10 + 10 * clicks }}
      className="heart"
       />
    </div>
  );
}

export { AnimalShow };
