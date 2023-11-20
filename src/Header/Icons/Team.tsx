import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  const [people, setPeople] = useState('#CD128A');

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
        icon={faPeopleGroup}
        style={{ color: people, cursor: 'pointer' }}
        onClick={() => {
          if (people === '#CD128A') {
            setPeople('Black');
          } else {
            setPeople('#CD128A');
          }
        }}
      />
    </div>
  );
};

export default Team;
