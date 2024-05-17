'use client';

import React, { useEffect, useState } from 'react';

import getObjectAndImages from './getObjectAndImages.js';

const ObjectButtons = ({ answer, score, setScore, setData, disabled, setDisabled }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key >= '1' && event.key <= '9') {
            const button = document.getElementById(`button${event.key}`);
                if (button) button.click();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
            <button id="button1" type="button" value="Monkey" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Monkey</button>
            <button id="button2" type="button" value="Dog" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Dog</button>
            <button id="button3" type="button" value="Boat" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Boat</button>
            <button id="button4" type="button" value="Umbrella" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Umbrella</button>
            <button id="button5" type="button" value="Fruit" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Fruit</button>
            <button id="button6" type="button" value="Clock" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Clock</button>
            <button id="button7" type="button" value="Snake" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Snake</button>
            <button id="button8" type="button" value="Elephant" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={disabled}>Elephant</button>
        </form>
    );
};

export default ObjectButtons;