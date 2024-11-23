import './styles.css';
import Container from './components/Container';
import Steps from './components/Steps';
import Message from './components/Message';
import { useState } from 'react';
import Buttons from './components/Buttons';
import Button from "./components/Button";

export default function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [activeMsg, setActiveMsg] = useState({
    step: 0,
    message: messages[0]
  });

  function onClickPrev() {
    console.log("inside onClickPrev()")
    const currStep = activeMsg.step
    if (currStep > 0)
      setActiveMsg({step: currStep - 1, message: messages[currStep - 1]})
  }

  function onClickNext() {
    console.log("inside onClickNext()")
    const currStep = activeMsg.step
    if (currStep < messages.length - 1)
      setActiveMsg({step: currStep + 1, message: messages[currStep + 1]})
  }

  return (
    <Container>
      <Steps value={messages} active={activeMsg.step + 1} />
      <Message value={activeMsg} />
      <Buttons>
        <Button text="previous" onClick={onClickPrev}/>
        <Button text="next" onClick={onClickNext}/>
      </Buttons>
    </Container>
  );
}
