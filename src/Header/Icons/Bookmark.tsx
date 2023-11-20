import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Bookmark = () => {
  const [bookmarkColor, setBookmarkColor] = useState('#CD128A');

  return (
    <div
      style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #ccc',
        marginRight: '0.5rem',
      }}
    >
      <FontAwesomeIcon
        icon={faBookmark}
        style={{ color: bookmarkColor, cursor: 'pointer' }}
        onClick={() => {
          if (bookmarkColor === '#CD128A') {
            setBookmarkColor('Black');
          } else {
            setBookmarkColor('#CD128A');
          }
        }}
      />
    </div>
  );
};

export default Bookmark;
