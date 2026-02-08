import { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [clicks, setClicks] = useState(0);

  const handleNoClick = () => {
    if (clicks < 3) {
      setClicks((prev) => prev + 1);
    }
  };

  const getNoButtonStyle = () => {
    if (clicks === 1) return styles.tip1;
    if (clicks === 2) return styles.tip2;
    if (clicks >= 3) return styles.fallDown;
    return "";
  };

  const handleYesClick = () => {
    fetch("/api/yes", {
      method: "POST", // Changed from GET to POST
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(() => {
        alert("I love you mwahhhh");
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };

  return (
    <div className={"container is-flex is-justify-content-space-evenly m-2"}>
      <div className="field">
        <p className="control">
          <button className="button is-success" onClick={handleYesClick}>
            Yes
          </button>
        </p>
      </div>

      <div className="field">
        <p className="control">
          <button
            className={`button is-danger ${getNoButtonStyle()}`}
            onClick={handleNoClick}
          >
            No
          </button>
        </p>
      </div>
    </div>
  );
};

export default Form;
