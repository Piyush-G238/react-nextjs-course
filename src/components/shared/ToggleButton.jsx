export default function ToggleButton({ text, clickFn }) {
    return (
        <button className="btn-toggle" onClick={clickFn}>
            {text}
        </button>
    )
}