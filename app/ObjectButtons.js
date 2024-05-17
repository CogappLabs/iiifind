'use client';

import React from 'react';

const ObjectButtons = () => {
    const handleClick = (e) => {
        e.preventDefault();

        console.log(e.target.value);
    };

    return (
        <form className="flex flex-wrap gap-2 justify-center">
            <button type="button" value="Monkey" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Monkey</button>
            <button type="button" value="Dog" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Dog</button>
            <button type="button" value="Boat" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Boat</button>
            <button type="button" value="Umbrella" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Umbrella</button>
            <button type="button" value="Fruit" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Fruit</button>
            <button type="button" value="Clock" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Clock</button>
            <button type="button" value="Snake" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Snake</button>
            <button type="button" value="Elephant" onClick={handleClick} className="bg-iiif-yellow hover:bg-iiif-purple text-iiif-purple hover:text-iiif-yellow font-bold py-2 px-4 rounded border border-transparent hover:border-iiif-yellow">Elephant</button>
        </form>
    );
};

export default ObjectButtons;