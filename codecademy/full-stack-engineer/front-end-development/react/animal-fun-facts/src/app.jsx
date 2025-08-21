import React from "react";
import { createRoot } from "react-dom/client";
import { animals } from './animals.js';

const container = document.getElementById('app');
const root = createRoot(container);

const showBackground = true;
const background = showBackground && <img className="background" src="./src/images/ocean.jpg" alt="ocean" />;
const title = '';

const images = [];
for (const animal in animals) {
    images.push(<img key={animal} className="animal" 
        src={animals[animal].image} 
        alt={animal} 
        aria-label={animal} 
        role="button" 
        onClick={displayFact} />)
}

function displayFact(e) {
    const animalClicked = e.target.alt;
    const animal = animals[animalClicked];
    const facts = animal.facts;
    const randomFactIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomFactIndex];

    document.getElementById('fact').innerHTML = fact;
}

const animalFacts = (
    <div>
        {background}
        <h1>{title || "Click an animal for a fun fact!"}</h1>
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
);

root.render(animalFacts);