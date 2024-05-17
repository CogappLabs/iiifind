'use client';

import React, { useEffect, useRef, useState } from 'react';

import getObjectAndImages from './getObjectAndImages.js';

const ObjectButtons = ({ answer, score, setScore, scorePlayerTwo, setScorePlayerTwo, setData, disabled, setDisabled }) => {
    const answerRef = useRef(answer);

    useEffect(() => {
        answerRef.current = answer;
      }, [answer]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key >= '1' && e.key <= '9') {
                if (e.code.startsWith('Digit')) {
                    const button = document.getElementById(`button${e.key}`);
    
                    let currentCorrect = score.correct;
                    let currentIncorrect = score.incorrect;
                    let currentAnswer = answerRef.current;
    
                    if (button.value === currentAnswer) {
                        setScore({correct: currentCorrect + 1, incorrect: currentIncorrect});
                    } else {
                        setScore({correct: currentCorrect, incorrect: currentIncorrect + 1});
                    }
            
                    // Todo: This isn't working properly 
                    setDisabled(true);
            
                    getObjectAndImages().then(newData => {
                        setData(newData);
                        setDisabled(false);
                    });
                } else if (e.code.startsWith('Numpad')) {
                    const button = document.getElementById(`button${e.key}`);
    
                    let currentCorrect = scorePlayerTwo.correct;
                    let currentIncorrect = scorePlayerTwo.incorrect;
                    let currentAnswer = answerRef.current;
    
                    if (button.value === currentAnswer) {
                        setScorePlayerTwo({correct: currentCorrect + 1, incorrect: currentIncorrect});
                    } else {
                        setScorePlayerTwo({correct: currentCorrect, incorrect: currentIncorrect + 1});
                    }
            
                    // Todo: This isn't working properly 
                    setDisabled(true);
            
                    getObjectAndImages().then(newData => {
                        setData(newData);
                        setDisabled(false);
                    });
                }
    
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [score, setScore, answerRef, disabled, setDisabled, setData]);



    const handleClick = (e) => {
        e.preventDefault();

        let currentCorrect = score.correct;
        let currentIncorrect = score.incorrect;

        if (e.target.value === answer) {
            setScore({correct: currentCorrect + 1, incorrect: currentIncorrect});
        } else {
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