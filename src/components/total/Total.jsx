import React from 'react';

const Total = ({ totalValue }) => {
  return (
      <div className="total">
          <input type="text" readOnly value={totalValue}/>
      </div>
  );
};

export default Total;
