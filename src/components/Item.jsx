export default function Item({ value }) {
    return (
        <li>
            <input type="checkbox" name="isPacked" id="isPacked" defaultChecked={value.packed}/>
            <span style={value.packed ? {textDecoration: "line-through"} : {}}>
                {value.quantity} {value.description}
            </span>
            <button>❌</button>
        </li>
    );
}