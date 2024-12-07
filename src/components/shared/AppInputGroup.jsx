export default function AppInputGroup({ text, type = "text", id, changeFn, disable = false, value }) {

    function onChange(event) {
        const { value: inputValue } = event.target
        if (isNaN(inputValue)) {
            changeFn(inputValue)
        } else {
            changeFn(+inputValue)
        }
    }

    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input
                type={type}
                id={id}
                disabled={disable}
                onChange={onChange}
                value={value} />
        </>
    );
}