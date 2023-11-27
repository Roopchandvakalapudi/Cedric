import React, { useState, useEffect } from 'react';
import './Chat.css';
import send from '../Icons/send.svg';
import mic from '../Icons/microphone.svg';
import logo from '../Icons/favicon.png';

interface QA {
  question: string;
  answer: string;
}

const Data = [
  {
    question: 'Hi',
    answer: "Hello, I'm Cedric. How Can I help you?",
  },
  {
    question: 'What is your Name',
    answer: 'My Name is Cedric',
  },
];

const Chat: React.FC = () => {
  const [chatData, setChatData] = useState<QA[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [userSubmitted, setUserSubmitted] = useState<boolean>(false);

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
    setUserSubmitted(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentQuestion.trim() !== '') {
      handleQuestionSubmit();
    }
  };

  return (
    <div className='container'>
      <div className='chat-box'>
        {userSubmitted ? (
          chatData.map((qa) => (
            <>
              <div className='chat-box-question'>
                <h2>{qa.question}</h2>
              </div>
              <div className='chat-box-answer'>
                <div className='chat-logo'>
                  <img src={logo} />
                </div>
                <div className='chat-answer'>{qa.answer}</div>
              </div>
            </>
          ))
        ) : (
          <>
            <p>Hi, I'm Cedric, your strategically insightful assistant!</p>
            <p>I can help you get answers to your questions.</p>
            <p>What would you like to ask me?</p>
          </>
        )}
      </div>
      <div className='input-container'>
        <div className='input-talk-to-me'>
          <input
            className='input-field'
            type='text'
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder='Talk to me'
          />
          <button onClick={handleQuestionSubmit}>
            <img src={send} className='send-btn' />
          </button>
        </div>
        <div className='chat-mic'>
          <button>
            <img src={mic} className='mic-btn' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
