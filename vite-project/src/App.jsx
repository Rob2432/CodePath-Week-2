import React, { useState } from 'react';
import CardSetInfo from './Components/CardSetInfo';
import FlashCard from './Components/FlashCard';
import './App.css';

function App() {
    const cards = [
        { question: "NBA: Nicknamed 'King James'", answer: "LeBron James" },
        { question: "NBA: 'Chef' — long-range shooter", answer: "Stephen Curry" },
        { question: "NBA: 'The Slim Reaper'", answer: "Kevin Durant" },
        { question: "NBA: Slovenian guard, skillful playmaker", answer: "Luka Doncic" },
        { question: "Soccer: Argentinian forward, 2022 World Cup winner", answer: "Lionel Messi" },
        { question: "Soccer: Portuguese forward, Champions League top scorer", answer: "Cristiano Ronaldo" },
        { question: "Soccer: Brazilian forward, known for dribbling", answer: "Neymar Jr." },
        { question: "Soccer: French forward, World Cup 2018 winner", answer: "Kylian Mbappe" },
        { question: "NBA: Known as 'The Beard'", answer: "James Harden" },
        { question: "Soccer: Known as 'Captain America', USA midfielder", answer: "Christian Pulisic" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentIndex(randomIndex);
        setIsFlipped(false); // reset flip for new card
    };

    return (
        <div className="App">
            <CardSetInfo />
            <FlashCard
                question={cards[currentIndex].question}
                answer={cards[currentIndex].answer}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
            />
            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
}

export default App;

