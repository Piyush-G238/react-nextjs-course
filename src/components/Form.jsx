export default function Form({ submitFn }) {

    function submitForm(event) {
        event.preventDefault();
    }

    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
            <form onSubmit={submitForm}>
                <select name="numItems" id="numItems">
                    {Array.from({ length: 10 }, (_, index) => <option value={index + 1} key={index}>{index + 1}</option>)}
                </select>
                <input type="text" name="itemName" id="itemName" />
                <button type="submit">add</button>
            </form>
        </div>
    );
}