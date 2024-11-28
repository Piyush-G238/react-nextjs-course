export default function Step({value, isActive}) {
    return <div className={isActive ? "active" : null}>{value}</div>
}