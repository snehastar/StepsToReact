import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Card />
      <Card />;
    </div>
  );
}

function Card() {
  const [hover, setHover] = useState(false);
  //   let arr = useState(1); //initial value = 1
  //   console.log(arr);
  const [step, setStep] = useState(1);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  function handlePrevious() {
    //adding constraints otherwise step will go till -infi
    if (step > 1)
      //setStep(step - 1);
      //callback is better way to write
      setStep((s) => s - 1); //callback to pass the value s as step and change it
  }
  function handleNext() {
    //adding constraints otherwise step will go till +infi
    if (step < 3) {
      //setStep(step + 1);
      setStep((s) => s + 1); //callback to pass the value s as step and change it
    }
  }

  return (
    <div
      className="stepshover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: hover ? "#8ff1f8" : "#85d2d8" }}
    >
      <Numbers step={step} />
      <Message step={step} />
      <Buttons handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
}
function Numbers({ step }) {
  return (
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>
  );
}

function Message({ step }) {
  return (
    <p className="message">
      Step:{step} {messages[step - 1]}
    </p>
  );
}

function Buttons({ handleNext, handlePrevious }) {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: "#6a5cea", color: "white" }}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        style={{ backgroundColor: "#6a5cea", color: "white" }}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
