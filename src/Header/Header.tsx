import React from 'react';
import './Header.css';
import LogoBanner from './LogoBanner/LogoBanner';
import Bookmark from './Icons/Bookmark';
import Team from './Icons/Team';

const Header: React.FC = () => {
  return (
    <>
      <div className='header-main'>
        <LogoBanner />
        <div className='icon-container'>
          <Bookmark />
          <Team />
        </div>
      </div>
    </>
  );
};

export default Header;
