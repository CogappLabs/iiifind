'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
// import Openseadragon from './Openseadragon'
import ObjectButtons from './ObjectButtons.js';
import getObjectAndImages from './getObjectAndImages.js';
import ScoreTracker from './ScoreTracker.js';
import CountdownTimer from './CountdownTimer.js';

const Openseadragon = dynamic(
  () =>
    import('./OpenSeadragonViewer.js')
)

export default function Home() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState({"correct": 0, "incorrect": 0});
  const [scorePlayerTwo, setScorePlayerTwo] = useState({"correct": 0, "incorrect": 0});
  const [disabled, setDisabled] = useState(true);
  const [start, setStart] = useState(false);
  const [startDisabled, setStartDisabled] = useState(false);
  const [startText, setStartText] = useState('Start');
  const [timeLeft, setTimeLeft] = useState(1 * 60);

  const handleStart = () => {
    setDisabled(false);
    setStartDisabled(true);
    setStart(true);
    setTimeLeft(1 * 60);
    setScore({"correct": 0, "incorrect": 0});

    getObjectAndImages().then(newData => {
      setData(newData);
    });
  };

return (
        <div className="container mt-10 mx-auto mb-10 p-4 bg-iiif-purple">
          <h1 className="mb-4 text-2xl font-bold text-black">IIIFind</h1>
          <p className="mb-2 text-black">
              <span className="font-bold">
                How to play:&nbsp;
              </span> 
              Can you find the common object in the two images? How many can you find in one minute? Press &apos;Start&apos; to start the game.  
          </p>
          <p className="mb-2 text-black">
            <span className="font-bold">
              Note:&nbsp;
            </span>
            For a two player version use a keyboard with a number pad. Player 1 uses the numbers 1-9, and Player 2 uses the number pad.
          </p>

          <button onClick={handleStart} className="mb-4 bg-iiif-yellow hover:bg-black text-black hover:text-iiif-yellow font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:text-white" disabled={startDisabled}>{ startText }</button>

          {data && (
            <ObjectButtons answer={data.object} score={score} setScore={setScore} scorePlayerTwo={scorePlayerTwo} setScorePlayerTwo={setScorePlayerTwo} setData={setData} disabled={disabled} setDisabled={setDisabled} timeLeft={timeLeft}/>  
          )}

          <div className="flex justify-between gap-16 text-black border-4 border-iiif-yellow bg-white p-4 mb-8">
            <ScoreTracker  score={score} scorePlayerTwo={scorePlayerTwo} />
            <CountdownTimer  start={start} setStart={setStart} setStartText={setStartText} setDisabled={setDisabled} setStartDisabled={setStartDisabled} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </div> 

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="w-full min-h-500 border-4 border-iiif-yellow bg-white">
                {data && (
                  <Openseadragon artworkId={data.imageId1} idPrefix='openseadragon1' />
                )}
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full min-h-500 border-4 border-iiif-yellow bg-white">
                {data && (
                  <Openseadragon artworkId={data.imageId2} idPrefix='openseadragon2' />
                )}
              </div>
            </div>
          </div>     
        </div>
    );
}