import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
              <div>
                <p>Position:</p>
                <p>Height:</p>
                <p>Weight:</p>
                <p>College:</p>
                <p>Combine 40 time:</p>
                <p>nfl.com link:</p>
                <p>espn.com link:</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;