import Logo from "./components/Logo"
import Form from "./components/Form"
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import "./styles.css"
import { useState } from "react";

export default function App() {
  
  const [packingList, setPackingList] = useState([
    {
      id: 1,
      description: "Passport",
      quantity: 1,
      packed: true
    }
  ]);

  function addItem(item) {
    setPackingList(curr => [...curr, item])
  }

  return (
    <div className="app">
      <Logo heading="far away"/>
      <Form submitFn={addItem} />
      <PackingList list={packingList}/>
      <Stats />
    </div>
  )
}
