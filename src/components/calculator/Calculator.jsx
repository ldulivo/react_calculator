import React, { useState } from 'react';
import Numbers from '../numbers/Numbers';
import Total from '../total/Total';

import MathCalc from '../../helpers/math';

const mathCalc = new MathCalc();

const Calculator = () => {
    const [totalValue, setTotalValue] = useState("0");

    const pressKey = (k) => {
        
        setTotalValue( mathCalc.KeyPress(k) );
    }

  return (
    <div className='calculator'>

        <Total totalValue={ totalValue } />

        <div className='content'>
            <section>
                <div className="calculator_3">
                <Numbers pressKey={pressKey} val={"C"}/>
                <Numbers pressKey={pressKey} val={"/"}/>
                <Numbers pressKey={pressKey} val={"*"}/>
                <Numbers pressKey={pressKey} val={7}/>
                <Numbers pressKey={pressKey} val={8}/>
                <Numbers pressKey={pressKey} val={9}/>
                <Numbers pressKey={pressKey} val={4}/>
                <Numbers pressKey={pressKey} val={5}/>
                <Numbers pressKey={pressKey} val={6}/>
                <Numbers pressKey={pressKey} val={1}/>
                <Numbers pressKey={pressKey} val={2}/>
                <Numbers pressKey={pressKey} val={3}/>
                <Numbers pressKey={pressKey} val={0} classCalc={"span2_col"}/>
                <Numbers pressKey={pressKey} val={"."}/>
                </div>
            </section>

            <section>
                <div className="calculator_1">
                    <Numbers pressKey={pressKey} val={"-"}/>
                    <Numbers pressKey={pressKey} val={"+"} classCalc={"span2_row"}/>
                    <Numbers pressKey={pressKey} val={"="} classCalc={"span2_row"}/>
                </div>
            </section>
        </div>


        
    </div>
  );
};

export default Calculator;
