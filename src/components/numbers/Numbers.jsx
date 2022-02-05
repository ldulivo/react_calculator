import React from 'react';

const Numbers = ({ val, classCalc="", pressKey }) => {
    
    let classButton;
    ( !isNaN(val) )
        ? classButton = ''
        : ( val === 'C' )
            ? classButton ='clear'
            : classButton ='op'

  return (
    <div className={`numbers ${classCalc}`}>
        <button className={classButton}>
            <p onClick={() => pressKey(val)}>
                {val}
            </p>
        </button>
    </div>
  );
};

export default Numbers;
