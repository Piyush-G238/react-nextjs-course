export default function Stats({total, packed, percent}) {
    return (
        <div className="stats">
            <em>🎒 You have {total} items on your list, and you already packed {packed}({percent}%)</em>
        </div>
    );
}