import React from 'react';

const Numbers = ({ val, classCalc="" }) => {

  return (
      <div className={`numbers ${classCalc}`}>
          {
              ( !isNaN(val) )
                ? <button><p>{val}</p></button>
                : ( val === "C" ) 
                    ? <button className='clear'><p>{val}</p></button>
                    : <button className="op"><p>{val}</p></button>
          }
      </div>
  );
};

export default Numbers;
