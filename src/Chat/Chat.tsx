import React, { useState, useEffect } from 'react';
import './Chat.css';
import send from '../Icons/send.png';
import mic from '../Icons/microphone.png';
import logo from '../Icons/favicon.png';

interface QA {
  question: string;
  answer: string;
}

const Data = [
  {
    question: 'What is your name?',
    answer: "I am an assistant created with React and OpenAI's GPT-3.",
  },
  {
    question: 'How does React work?',
    answer:
      'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.',
  },
];

const Chat: React.FC = () => {
  const [chatData, setChatData] = useState<QA[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');

  useEffect(() => {
    setChatData(Data.slice(0, 0));
  }, []);

  const handleQuestionSubmit = () => {
    const foundAnswer = Data.find(
      (qa) => qa.question.toLowerCase() === currentQuestion.toLowerCase()
    );

    setChatData((prevChatData) => [
      ...prevChatData,
      {
        question: currentQuestion,
        answer: foundAnswer
          ? foundAnswer.answer
          : "Sorry, I don't have an answer for that.",
      },
    ]);

    // Clear the input field
    setCurrentQuestion('');
  };

  return (
    <div className='container'>
      <div className='chat-box'>
        {chatData.map((qa) => (
          <>
            <div>{qa.question}</div>
            <div>
              <img src={logo} className='logo' /> {qa.answer}
            </div>
          </>
        ))}
      </div>
      <div className='input-container'>
        <input
          className='input-field'
          type='text'
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder='Talk to me'
        />
        <button onClick={handleQuestionSubmit}>
          <img src={send} className='send-btn' />
        </button>
        <button>
          <img src={mic} className='mic-btn' />
        </button>
      </div>
    </div>
  );
};

export default Chat;
