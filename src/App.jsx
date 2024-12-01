import Logo from "./components/Logo"
import Form from "./components/Form"
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import "./styles.css"
import { useState } from "react";

export default function App() {

  const [packingList, setPackingList] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    packed: 0,
    percent: 0
  })

  function addItem(item) {
    const newLength = packingList.length + 1;
    item["id"] = Math.round(Math.random() * 10000) / 10000;
    setPackingList(curr => [...curr, item])
    setStats(stat => {
      return {
        ...stat,
        total: newLength,
        percent: (stat.packed / newLength) * 100
      }
    })
  }

  function changePackedStatus(id, status) {
    console.log(id, status)
    setPackingList(curr => {
      const index = curr.findIndex(item => item.id == id)
      if (index > -1) {
        let newPacked
        if (status) {
          newPacked = stats.packed + 1
        } else {
          newPacked = stats.packed - 1
        }
        setStats(stat => {
          return { 
            ...stat, 
            packed: newPacked, 
            percent: (newPacked / stat.total) * 100 
          }
        })
        curr[index].packed = status
      }

      return [...curr]
    })
  }

  function removeItem(id) {
    const newLength = packingList.length - 1
    setPackingList(curr => curr.filter(item => item.id !== id))
    setStats(stat => {
      return {
        ...stat, 
        total: newLength, 
        percent: newLength == 0 ? 0 : (stat.packed/newLength) * 100
      }
    })
  }

  function clearList() {
    setPackingList([])
    setStats({
      total: 0,
      packed: 0,
      percent: 0
    })
  }

  function sortItem(sortBy) {
    setPackingList(curr => {
      if (sortBy == "sortDescription") {

        curr.sort((item1, item2) => {
          return item1.description.toLowerCase().localeCompare(item2.description.toLowerCase())
        })
      }

      else if (sortBy == "sortPacked") {

        curr.sort((item1, item2) => {
          return item2.packed - item1.packed
        })
      }

      return [...curr]
    })

    // console.log(packingList.map(item => item.description))
  }

  return (
    <div className="app">
      <Logo heading="far away" />
      <Form submitFn={addItem} />
      <PackingList list={packingList} changeFn={changePackedStatus} removeFn={removeItem} clearFn={clearList} sortFn={sortItem} />
      <Stats
        total={stats.total}
        packed={stats.packed}
        percent={stats.percent} />
    </div>
  )
}
