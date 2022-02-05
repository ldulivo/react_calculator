import React from 'react';

const Total = ({ totalValue, accrued }) => {
  return (
      <div className="total">
          <input type="text" readOnly className='accrued' value={accrued} />
          <input type="text" readOnly value={totalValue}/>
      </div>
  );
};

export default Total;
