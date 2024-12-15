import { useState } from "react";
import easterEgg from "../../assets/easterEgg.png";
import "./EasterEgg.css";

export const EasterEgg = () => {
  const [displayEasterEgg, setDisplayEasterEgg] = useState(false);
  return (
    <div className="easter-egg-container">
      <button
        className="easter-egg-button"
        onClick={() => {
          setDisplayEasterEgg(true);
          setTimeout(() => {
            setDisplayEasterEgg(false);
          }, 3000);
        }}
      ></button>
      {displayEasterEgg && (
        <div className="inner-wrap">
          <img src={easterEgg} width="400px" />
          <span>Congratulations, you found the easter egg!! </span>
        </div>
      )}
    </div>
  );
};
