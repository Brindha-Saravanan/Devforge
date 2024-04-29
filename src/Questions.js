import './Questions.css'
import React, { useState } from 'react';
import Confetti from './Confetti';
import { Link ,useLocation } from 'react-router-dom';


function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionData, setQuestionData] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [score, setScore] = useState(0);
    const location = useLocation();
    const username = location.state ? location.state.username : null;
    const fetchNextQuestion = async () => {
        try {
            const response = await fetch('https://devforgebackend-3.onrender.com/fetchques', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ questionNumber: currentQuestion + 1 })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch question');
            }
            const questionData = await response.json();
            setQuestionData(questionData); // Set the fetched question data
            setCurrentQuestion(currentQuestion + 1); // Update current question number
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
        fetchNextQuestion(); // Fetch the first question when quiz starts
    };

    const handleNextQuestion = async () => {
        // Compare selected option with the correct answer
        const selectedOption = document.querySelector('input[name="options"]:checked');
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === questionData.answer) {
                setScore(score + 100); // Increment score for correct answer
            }
        }

        // Fetch next question or end quiz
        if (currentQuestion < 9) {
            await fetchNextQuestion();
        } else {
            setQuestionData(null); // Reset question data to hide questions
        }
    };

    return (
        <>
        <div className='top'>            
        {/* <p className='welcome'>Welcome, {username}!</p>  */}
        <button  className="now"><Link to="/">Home</Link></button>
        </div>
        <div className='o'>
            <div className="car">
                {quizStarted && questionData ? (
                    <>
                        <div className="score">Score: {score}</div>
                        <h2>Question: {questionData.question}</h2>
                        <form>
                            {questionData.options.map((option, index) => (
                                <div key={index}>
                                    <input type="radio" id={`option${index}`} name="options" value={option} />
                                    <label htmlFor={`option${index}`}>{option}</label>
                                </div>
                            ))}
                        </form>
                        <button className='next' onClick={handleNextQuestion}>NEXT</button>
                    </>
                ) : quizStarted ? (
                    <div className='end'>
                        <h1>Quiz Ended!</h1>
                        <h2>Final Score: {score}</h2>
                        <button className='finish'><Link to="/">Finish</Link></button>
                        <Confetti/>
                    </div>
                ) : (
                    <div className='s'>
                        <h1 className='react'>React</h1>
                        <button onClick={handleStartQuiz} className='start'>Start Assessment</button>                       
                    
                    </div>
                )}
            </div>
        </div></>
    );
}

export default Questions;
