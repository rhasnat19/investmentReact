import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevVal) => {
      return { ...prevVal, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;