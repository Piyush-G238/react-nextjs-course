import Item from "./Item";

export default function PackingList({ list, changeFn, removeFn, clearFn, sortFn }) {
    
    function sortPackingList(event) {
        console.log(event.target.value)
        sortFn(event.target.value)
    }

    if (list.length == 0)
        return <div className="list">There are no items in your packing list!</div>
    
    return (
        <div className="list">
            <h5>LIST</h5>
            <ul>
                {list.map((item, index) => <Item
                    value={item}
                    key={index}
                    changeFn={changeFn}
                    removeFn={removeFn} />)}
            </ul>
            <div className="actions">
                <select name="sortBy" id="sortBy" onChange={sortPackingList}>
                    <option value="sortDescription">sort by description</option>
                    <option value="sortPacked">sort by packed</option>
                </select>
                <button onClick={clearFn}>clear list</button>
            </div>
        </div>
    );
}