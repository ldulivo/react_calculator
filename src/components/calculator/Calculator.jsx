import React from 'react';
import Numbers from '../numbers/Numbers';
import Total from '../total/Total';

const Calculator = () => {
  return (
    <div className='calculator'>

        <Total />

        <div className='content'>
            <section>
                <div className="calculator_3">
                <Numbers val={"C"}/>
                <Numbers val={"/"}/>
                <Numbers val={"*"}/>
                <Numbers val={7}/>
                <Numbers val={8}/>
                <Numbers val={9}/>
                <Numbers val={4}/>
                <Numbers val={5}/>
                <Numbers val={6}/>
                <Numbers val={1}/>
                <Numbers val={2}/>
                <Numbers val={3}/>
                <Numbers val={0} classCalc={"span2_col"}/>
                <Numbers val={"."}/>
                </div>
            </section>

            <section>
                <div className="calculator_1">
                    <Numbers val={"-"}/>
                    <Numbers val={"+"} classCalc={"span2_row"}/>
                    <Numbers val={"="} classCalc={"span2_row"}/>
                </div>
            </section>
        </div>


        
    </div>
  );
};

export default Calculator;
