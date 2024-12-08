import ToggleButton from "../shared/ToggleButton";
import WatchSummary from "./WatchSummary";
import WatchItem from "./WatchItem";

import { useState } from "react";

export default function WatchList({ list }) {

    const [shown, setShown] = useState(true)
    const [summary, setSummary] = useState({
        movieCount: list.length,
        avgRating: list.reduce((item1, item2) => item1.imdbRating + item2.imdbRating) / list.length,
        avgUserRating: list.reduce((item1, item2) => item1.userRating + item2.userRating) / list.length,
        avgMovieLength: list.reduce((item1, item2) => item1.runtime + item2.runtime) / list.length
    })

    function toggleShown() {
        setShown(curr => !curr)
    }

    return (
        <div className="box">
            <ToggleButton text={shown ? "-" : "+"} clickFn={toggleShown} />
            <WatchSummary summary={summary} />
            {shown && <ul className="list">
                {list.map(item => <WatchItem movie={item} key={item.imdbID} />)}
            </ul>}
        </div>
    )
}