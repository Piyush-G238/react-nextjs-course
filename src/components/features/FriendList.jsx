import { useState } from "react"
import AppButton from "../shared/AppButton"
import AddFriend from "./AddFriend"
import Friend from "./Friend"

export default function FriendList({data, addFn, selectFn, selected}) {

    const [showAddFriend, setShowAddFriend] = useState(false);

    function toggleAddForm() {
        setShowAddFriend(curr => !curr)
    }

    function addFriend(friend) {
        addFn(friend)
        toggleAddForm()
    }

    return (
        <div className="sidebar">
            <ul>
                {data.map(friend => {
                    let isSelected = false
                    if (selected) {
                        isSelected = (selected.id == friend.id)
                    }

                    return <Friend 
                        key={friend.id}
                        data={friend} 
                        selectFn={selectFn} 
                        isSelected={isSelected}/>
                })}
            </ul>
            {showAddFriend && <AddFriend submitFn={addFriend}/>}
            <AppButton text={showAddFriend ? "Close" : "Add friend"} clickFn={toggleAddForm} />
        </div>
    )
}