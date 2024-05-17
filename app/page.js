'use client';

import React, { useEffect, useState } from 'react';
import Openseadragon from './Openseadragon'
import ObjectButtons from './ObjectButtons.js';
import getObjectAndImages from './getObjectAndImages.js';
import ScoreTracker from './ScoreTracker.js';
import CountdownTimer from './CountdownTimer.js';

export default function Home() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState({"correct": 0, "incorrect": 0});
  const [disabled, setDisabled] = useState(true);
  const [start, setStart] = useState(false);
  const [startDisabled, setStartDisabled] = useState(false);

  useEffect(() => {
    getObjectAndImages().then(newData => {
      setData(newData);
    });
  }, []);

  const handleStart = () => {
    setDisabled(false);
    setStart(true);
    setStartDisabled(true);
  };

return (
        <div className="container mt-10 mx-auto mb-10 p-4 bg-iiif-purple">
          <h1 className="mb-4 text-2xl font-bold text-iiif-yellow">DIIIble (IIIF Dobble)</h1>
          <p className="mb-2 text-iiif-yellow">
              <span className="font-bold">
              How to use:&nbsp;
              </span> 
              Can you find the common object in these two images? Use the buttons below. 
          </p>

          <button onClick={handleStart} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow disabled:bg-gray-500 disabled:text-white" disabled={startDisabled}>Start</button>

          <div className="flex gap-16">
            {data && (
              <>
                <div className="w-1/2 p-8">
                  <Openseadragon artworkId={data.imageId1} idPrefix='openseadragon1' />
                </div>
                <div className="w-1/2 p-8">
                  <Openseadragon artworkId={data.imageId2} idPrefix='openseadragon2' />
                </div>
              </>
            )}
          </div>  
          {data && (
            <ObjectButtons answer={data.object} score={score} setScore={setScore} setData={setData} disabled={disabled} setDisabled={setDisabled} />  
          )}
          <div className="flex justify-between text-iiif-purple border-4 border-iiif-yellow bg-white p-4">
            <ScoreTracker  score={score}/>
            <CountdownTimer  start={start} setDisabled={setDisabled}/>
          </div>    

        </div>
    );
}