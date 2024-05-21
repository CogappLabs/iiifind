const ScoreTracker = ({score, scorePlayerTwo}) => {
    return (
        <div className="flex gap-16 flex-wrap">
            <div>
                <h2 className="mb-4 text-xl font-bold">Player 1: Score</h2>
                <div className="flex gap-2">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Correct</h3>
                        <div>{score.correct}</div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Incorrect</h3>
                        <div>{score.incorrect}</div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mb-4 text-xl font-bold">Player 2: Score</h2>
                <div className="flex gap-2">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Correct</h3>
                        <div>{scorePlayerTwo.correct}</div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Incorrect</h3>
                        <div>{scorePlayerTwo.incorrect}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreTracker;