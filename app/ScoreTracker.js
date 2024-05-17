const ScoreTracker = ({score}) => {
    return (
        <div className="text-iiif-purple border-4 border-iiif-yellow bg-white p-4">
            <h2 className="mb-4 text-xl font-bold">Score</h2>
            <div className="flex gap-2">
                <div>
                    <h3 className="mb-4 text-lg font-bold">Correct Answers</h3>
                    <div>{score.correct}</div>
                </div>
                <div>
                    <h3 className="mb-4 text-lg font-bold">Incorrect Answers</h3>
                    <div>{score.incorrect}</div>
                </div>
            </div>
        </div>
    );
};

export default ScoreTracker;