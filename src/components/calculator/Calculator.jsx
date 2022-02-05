import React, { useState } from 'react';
import Numbers from '../numbers/Numbers';
import Total from '../total/Total';

const Calculator = () => {
    const [totalValue, setTotalValue] = useState("0");
    const [decimal, setDecimal] = useState(false);
    const [accrued, setAccrued] = useState("0");

    const pressKey = (k) => {
        if ( accrued === "0" ) return( setAccrued( `${k}` ) );

        switch (k) {
            case "C":
                setTotalValue("0");
                setAccrued("0");
                setDecimal(false);
                break;
            
            case "/":
                console.log("dividido");
                break;

            case "*":
                console.log("producto");
                break;
            
            case "-":
                setAccrued( `${accrued} - ` );
                break;
            
            case "+":
                setAccrued( `${accrued} + ` );
                break;

            case "=":
                const re = /[-+]/;
                //const total = accrued.split(" ").join("")
                //const total = accrued.split("+").join()
                //total = accrued.split("-").join()
                const total = accrued.split(re).join()
                console.log( total );
                setTotalValue(total.trim())
                break;
            
            case ".":
                if ( !decimal ) {
                    setAccrued( `${accrued}.` );
                    setDecimal(true);
                }
                break;
        
            default:
                setAccrued(`${accrued}${k}`)
                break;
        }
    }

  return (
    <div className='calculator'>

        <Total totalValue={ totalValue } accrued={ accrued }/>

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
