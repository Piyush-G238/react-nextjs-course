import { useState } from "react";
import AppButton from "../shared/AppButton"
import AppInputGroup from "../shared/AppInputGroup"

export default function AddFriend({ submitFn }) {

    const [friend, setFriend] = useState({
        name: '',
        image: ''
    });

    function changeName(name) {
        setFriend(curr => {
            return { ...curr, name }
        })
    }

    function changeImage(image) {
        setFriend(curr => {
            return { ...curr, image }
        })
    }

    function submitForm(event) {
        event.preventDefault();
        submitFn(friend);

        setFriend({name: '', image: ''})
    }

    return (
        <form className="form-add-friend" onSubmit={submitForm}>
            <AppInputGroup text="Friend name" id="friendName" type="text" changeFn={changeName} />
            <AppInputGroup type="text" id="imageUrl" text="Image URL" changeFn={changeImage} />
            <AppButton text="Add" type="submit" />
        </form>
    )
}