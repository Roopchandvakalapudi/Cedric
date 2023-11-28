import './App.css';
import Chat from './Chat/Chat';
import Header from './Header/Header';

function App() {
  return (
    <>
      <div className="header-block">
        <Header />
      </div>
      <div className='chat-box-content'>
        <Chat />
      </div>
    </>
  );
}

export default App;
