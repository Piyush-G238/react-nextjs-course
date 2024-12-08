export default function WatchSummary({ summary }) {

    return (
        <div className="summary">
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{summary.movieCount} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{summary.avgRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{summary.avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{summary.avgMovieLength} min</span>
                </p>
            </div>
        </div>
    );
}