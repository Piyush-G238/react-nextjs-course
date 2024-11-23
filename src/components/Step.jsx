export default function Step({value, isActive}) {
    return <div className={isActive && "active"}>{value}</div>
}