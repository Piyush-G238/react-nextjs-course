import { useState } from "react";

export default function Form({ submitFn }) {
    const [formData, setFormData] = useState({
        quantity: 1,
        description: '',
        packed: false
    });

    function changeQuantity(event) {
        setFormData(curr => {
            return { ...curr, quantity: +event.target.value }
        })
    }

    function changeDescription(event) {
        setFormData(curr => {
            return { ...curr, description: event.target.value }
        })
    }

    function submitForm(event) {
        event.preventDefault();
        submitFn(formData)
        setFormData({quantity: 1, description: ''})
    }

    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
            <form onSubmit={submitForm}>
                <select name="numItems" id="numItems" value={formData.quantity} onChange={changeQuantity}>
                    {Array.from({ length: 10 }, (_, index) => <option value={index + 1} key={index}>{index + 1}</option>)}
                </select>
                <input type="text" name="itemName" id="itemName" onChange={changeDescription} value={formData.description} />
                <button type="submit">add</button>
            </form>
        </div>
    );
}