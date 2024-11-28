import './styles.css';
import Container from './components/Container';
import Steps from './components/Steps';
import Message from './components/Message';
import { useState } from 'react';
import Buttons from './components/Buttons';
import Button from "./components/Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  const [activeMsg, setActiveMsg] = useState({
    step: 0,
    message: messages[0]
  });

  const [isOpened, setIsOpened] = useState(true)

  function onClickClose() {
    setIsOpened(prev => !prev)
  }

  function onClickPrev() {
    console.log("inside onClickPrev()")
    if (activeMsg.step > 0)
      setActiveMsg(curr => {
        return { ...curr, step: curr.step - 1, message: messages[curr.step - 1] }
      })
  }

  function onClickNext() {
    console.log("inside onClickNext()")
    if (activeMsg.step < messages.length - 1)
      setActiveMsg(curr => {
        return {...curr, step: curr.step + 1, message: messages[curr.step + 1] }
      })
  }

  return (
    <div>
      <button className='close' onClick={onClickClose}>&times;</button>
      {isOpened && <Container>
        <Steps value={messages} active={activeMsg.step + 1} />
        <Message value={activeMsg} />
        <Buttons>
          <Button text="previous" onClick={onClickPrev} />
          <Button text="next" onClick={onClickNext} />
        </Buttons>
      </Container>}
    </div>
  );
}
