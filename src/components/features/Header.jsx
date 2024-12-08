import SearchBar from "../shared/SearchBar";

export default function Header({ movieCount }) {

    return (
        <nav className="nav-bar">
            <div className="logo">
                <span role="img">🍿</span>
                <h1>usePopcorn</h1>
            </div>
            <SearchBar />
            <p className="num-results">
                Found <strong>{movieCount}</strong> results
            </p>
        </nav>
    )
}