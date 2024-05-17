'use client';

import getObjectAndImages from './getObjectAndImages.js';

const ObjectButtons = ({ answer, score, setScore, setData, disabled, setDisabled }) => {
    const handleClick = (e) => {
        e.preventDefault();

        let currentCorrect = score.correct;
        let currentIncorrect = score.incorrect;

        if (e.target.value === answer) {
            console.log('correct');
            setScore({correct: currentCorrect + 1, incorrect: currentIncorrect});
        } else {
            console.log('incorrect');
            setScore({correct: currentCorrect, incorrect: currentIncorrect + 1});
        }

        // Todo: This isn't working properly 
        setDisabled(true);

        getObjectAndImages().then(newData => {
            setData(newData);
            setDisabled(false);
        });
    };

    return (
        <form className="flex flex-wrap gap-2 justify-center mb-4">
            <button type="button" value="Monkey" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Monkey</button>
            <button type="button" value="Dog" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Dog</button>
            <button type="button" value="Boat" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Boat</button>
            <button type="button" value="Umbrella" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Umbrella</button>
            <button type="button" value="Fruit" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Fruit</button>
            <button type="button" value="Clock" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Clock</button>
            <button type="button" value="Snake" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Snake</button>
            <button type="button" value="Elephant" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Elephant</button>
        </form>
    );
};

export default ObjectButtons;