import React, { useState } from 'react';
import EwokNavbar from './EwokNavbar';
import Header from "./Header";
import './quiz.css';
import background from './images/pattern.png'
import Copyright from './Copyright'

export default function Quiz() {
    const questions = [
		{
			questionText: 'Has Your Child seen Star Wars?',
			answerOptions: [
				{ answerText: 'Yes, they liked it', isCorrect: true },
				{ answerText: 'Yes, They are addicted!', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Who is their favorite character?',
			answerOptions: [
				{ answerText: 'Chewy', isCorrect: true },
				{ answerText: 'Ewok', isCorrect: true },
				{ answerText: 'Princess Leia', isCorrect: false },
				{ answerText: 'Luke Skywalker', isCorrect: false },
			],
		},
		{
			questionText: 'Does your child seem to like to speak in tounges?',
			answerOptions: [
				{ answerText: 'Yes!', isCorrect: true },
				{ answerText: 'They do not know how to talk yet so yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Is your child going around yelling "Hail Satan!"',
			answerOptions: [
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Not Sure', isCorrect: false },
				{ answerText: 'Yes!', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    
	return (
        <div style={{backgroundImage: `url(${background})`,  backgroundSize: 'auto 25%', backgroundRepeat: 'repeat', height: '100vh', }}>
        <Header />
        <EwokNavbar />
		<div className='app' >
			{showScore ? (
                <div className='score-section'>
                    Your childs Ewok Score is {score}. Scores over 3 aren't good!
                </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

		<Copyright />
			
        </div>
	);
}