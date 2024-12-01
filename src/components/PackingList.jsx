import Item from "./Item";

export default function PackingList({list}) {
    console.log(list)
    return (
        <div className="list">
            <h5>LIST</h5>
            <ul>
                {list.map((item, index) => <Item value={item} key={index} />)}
            </ul>
            <div className="actions">
                <select name="" id=""></select>
                <button>clear list</button>
            </div>
        </div>
    );
}