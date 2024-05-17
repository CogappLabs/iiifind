'use client';

import React, { useEffect, useState } from 'react';
import Openseadragon from './Openseadragon'
import ObjectButtons from './ObjectButtons.js';
import getObjectAndImages from './getObjectAndImages.js';
import ScoreTracker from './ScoreTracker.js';

export default function Home() {
  const [data, setData] = useState(getObjectAndImages());
  const [score, setScore] = useState({"correct": 0, "incorrect": 0});

return (
        <div className="container mt-10 mx-auto mb-10 p-4 bg-iiif-purple">
          <h1 className="mb-4 text-2xl font-bold text-iiif-yellow">DIIIble (IIIF Dobble)</h1>
          <p className="mb-2 text-iiif-yellow">
              <span className="font-bold">
              How to use:&nbsp;
              </span> 
              Can you find the common object in these two images? e.g. banana, bird, boat
          </p>

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
          <ObjectButtons answer={data.object} score={score} setScore={setScore}/>      
          <ScoreTracker  score={score}/>
        </div>
    );
}