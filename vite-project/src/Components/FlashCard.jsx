import React, { useState } from 'react';
import './FlashCard.css';

function FlashCard({
                       question,
                       answer,
                       isFlipped,
                       setIsFlipped,
                       currentIndex,
                       cardsLength,
                       handleNext,
                       handleBack
                   }) {
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
        <div className="flashcard-container">
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="front">{question}</div>
                <div className="back">{answer}</div>
            </div>

            <div className="guess-section">
                <input
                    type="text"
                    placeholder="Enter your answer"
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    className="guess-input"
                />

                <div className="button-row">
                    <button onClick={handleSubmit} className="flashcard-submit">
                        Submit
                    </button>
                    <button
                        onClick={handleBack}
                        className="flashcard-submit"
                        disabled={currentIndex === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="flashcard-submit"
                        disabled={currentIndex === cardsLength - 1}
                    >
                        Next
                    </button>
                </div>

                {feedback && (
                    <p
                        className={`flashcard-feedback ${
                            feedback === "correct" ? "correct" : "incorrect"
                        }`}
                    >
                        {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect!"}
                    </p>
                )}
            </div>
        </div>
    );
}

export default FlashCard;


