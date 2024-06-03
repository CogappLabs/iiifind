'use client';

import React, { useEffect, useRef, useState } from 'react';

import getObjectAndImages from './getObjectAndImages.js';

const ObjectButtons = ({ answer, score, setScore, scorePlayerTwo, setScorePlayerTwo, setData, disabled, setDisabled, timeLeft }) => {
    const answerRef = useRef(answer);
    const buttonRefs = useRef([]);
    if (buttonRefs.current.length !== 8) {
      buttonRefs.current = Array(8).fill(null).map((_, i) => buttonRefs.current[i] ?? React.createRef());
    }
    const buttonLabels = ['Monkey', 'Dog', 'Boat', 'Umbrella', 'Fruit', 'Clock', 'Snake', 'Elephant'];

    useEffect(() => {
        answerRef.current = answer;
      }, [answer]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key >= '1' && e.key <= '9') {
                if (e.code.startsWith('Digit')) {
                    const buttonIndex = parseInt(e.key, 10) - 1;
                    const button = buttonRefs.current[buttonIndex].current;
    
                    let currentCorrect = score.correct;
                    let currentIncorrect = score.incorrect;
                    let currentAnswer = answerRef.current;
    
                    if (timeLeft > 0) {
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
                    }
        
                } else if (e.code.startsWith('Numpad')) {
                    const buttonIndex = parseInt(e.key, 10) - 1;
                    const button = buttonRefs.current[buttonIndex].current;
    
                    let currentCorrect = scorePlayerTwo.correct;
                    let currentIncorrect = scorePlayerTwo.incorrect;
                    let currentAnswer = answerRef.current;


                    if (timeLeft > 0) {
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
    
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [score, scorePlayerTwo.correct, scorePlayerTwo.incorrect, setScore, setScorePlayerTwo, timeLeft, answerRef, disabled, setDisabled, setData]);



    const handleClick = (e) => {
        e.preventDefault();

        let currentCorrect = score.correct;
        let currentIncorrect = score.incorrect;

        if (timeLeft > 0) {
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
        }
    };

    return (
        <form className="flex flex-wrap gap-2 justify-center mb-4">
            {buttonRefs.current.map((ref, index) => (
                <button ref={ref} 
                        id={`button${index + 1}`} 
                        key={index}
                        type="button" 
                        value={buttonLabels[index]} 
                        onClick={handleClick} 
                        className="bg-iiif-yellow hover:bg-black text-black hover:text-iiif-yellow font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:text-white" 
                        disabled={disabled}>
                    {buttonLabels[index]}
                </button>
            ))} 
        </form>
    );
};

export default ObjectButtons;