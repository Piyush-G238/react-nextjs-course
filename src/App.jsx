import { useState } from "react";
import BillSharing from "./components/features/BillSharing";
import FriendList from "./components/features/FriendList";
import "./styles.css";

export default function App() {

  const [friendList, setFriendList] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    }
  ])

  const [select, setSelect] = useState()

  function addFriend(friend) {
    friend["id"] = Math.floor(Math.random() * 100000)
    friend["balance"] = 0

    setFriendList(currData => [...currData, friend])
  }

  function selectFriend(id) {
    const friend = friendList.find(friend => friend.id == id)
    setSelect(friend)
  }

  function updateBalance(id, balance) {
    const index = friendList.findIndex(friend => friend.id == id)
    if (index > -1) {
      setFriendList(curr => {
        curr[index].balance = balance
        return [...curr]
      })
      setSelect(null)
    }
  }

  return (
    <div className="app">
      <FriendList data={friendList} addFn={addFriend} selectFn={selectFriend} selected={select} />
      {select && <BillSharing data={select} sharingFn={updateBalance}/>}
    </div>
  );
}
