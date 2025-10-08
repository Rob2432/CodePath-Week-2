import React from 'react';
import './FlashCard.css';
import {useState} from "react";

function FlashCard({ question, answer, isFlipped, setIsFlipped }) {

    const handleClick = () => setIsFlipped(!isFlipped);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = () => {
        if (userGuess.trim().toLowerCase() === answer.toLowerCase()) {
            setFeedback("correct");
        } else {
            setFeedback("incorrect");
        }
    };

    return (
        <div className="flashcard-container" onClick={handleClick}>
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                <div className="front">{question}</div>
                <div className="back">{answer}</div>

                <input
                    type="text"
                    placeholder="Enter your answer"
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                />

                <button onClick={handleSubmit} className="flashcard-submit">
                    Submit
                </button>

                <p
                    className={`flashcard-feedback ${
                        feedback === "correct" ? "correct" : "incorrect"
                    }`}
                >
                    {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect!"}
                </p>

            </div>
        </div>
    );
}

export default FlashCard;

