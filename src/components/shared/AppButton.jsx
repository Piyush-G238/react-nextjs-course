export default function AppButton({ text, clickFn, type = "button" }) {
    if (type == "submit")
        return <button type="submit" className="button">{text}</button>
    else
        return <button type="button" className="button" onClick={clickFn}>{text}</button>
}