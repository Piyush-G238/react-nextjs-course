import { useState } from "react";

function Message(props) {
  return <h4>{props.content}</h4>;
}

export default function App() {
  const [advice, setAdvice] = useState("");
  const [adviceCount, setAdviceCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdvice(json.slip.advice);
    setAdviceCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message content={advice ? advice : "No suggested advice!"} />
      <p>You have read {adviceCount} peices of advices</p>
    </div>
  );
}
