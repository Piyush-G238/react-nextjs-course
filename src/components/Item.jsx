export default function Item({ value, changeFn, removeFn}) {
    
    function changePackedStatus(event) {
        changeFn(value.id, event.target.checked)
    }

    return (
        <li>
            <input 
                type="checkbox" 
                name="isPacked" 
                id="isPacked" 
                checked={value.packed} 
                onChange={changePackedStatus} />
            <span style={value.packed ? {textDecoration: "line-through"} : {}}>
                {value.quantity} {value.description}
            </span>
            <button onClick={() => removeFn(value.id)}>❌</button>
        </li>
    );
}