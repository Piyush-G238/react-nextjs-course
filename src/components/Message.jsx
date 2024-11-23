export default function Message({ value }) {

    return <div className="message">Step {value.step + 1}: {value.message}</div>
}