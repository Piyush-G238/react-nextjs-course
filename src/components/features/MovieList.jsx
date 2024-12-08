import { useState } from "react";
import ToggleButton from "../shared/ToggleButton";

import MovieItem from "./MovieItem";

export default function MovieList({ list }) {

    const [shown, setShown] = useState(true)

    function toggleShown() {
        setShown(curr => !curr)
    }

    return (
        <div className="box">
            <ToggleButton text={shown ? "-" : "+"} clickFn={toggleShown} />
            {shown && <ul className="list">
                {list.map((item) => <MovieItem movie={item} key={item.imdbID} />)}
            </ul>}
        </div>
    );
}