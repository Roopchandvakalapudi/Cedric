import './Chat.css';

const Chat = () => {
  return (
    <>
      <div className='main'>
        <div className='chats'>
          <div className='userchat'>
            <p>What is AI ?</p>
          </div>
          <div className='botchat'>
            <img
              src='https://www.centific.com/wp-content/themes/centific/assets/images/favicon.png'
              alt='logo'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates incidunt pariatur voluptatum, rem qui ducimus
              voluptatibus asperiores dolorum veritatis minima. rem.
            </p>
          </div>
        </div>
        <div className='chatFooter'>
          <input type='text' placeholder='Talk to me' />
          <button className='send'>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
