export default class MathCalc {
    totalValue;
    accrued;
    decimal;
    mathOperation;
    mathBuffer;

    constructor(
        totalValue      = "0",
        accrued         = "0",
        decimal         = false,
        mathOperation   = false,
        mathBuffer      = ""
    ){
        this.totalValue      = totalValue;
        this.accrued         = accrued;
        this.decimal         = decimal;
        this.mathOperation   = mathOperation;
        this.mathBuffer      = mathBuffer;
    }

    Clear(){
        this.totalValue      = "0";
        this.accrued         = "0";
        this.decimal         = false;
        this.mathOperation   = false;
        this.mathBuffer      = "";
    }

    KeyPress(k){

        switch (k) {
            case "C":
                this.Clear();
                return this.totalValue;
            
            case "/":

                if ( this.mathBuffer === "" ) {
                    this.Division();
                } else {
                    this.Operation();
                }
                this.mathBuffer = "/";
                this.decimal = false;
                return this.totalValue;

            case "*":

                if ( this.mathBuffer === "" ) {
                    this.Multiplication();
                } else {
                    this.Operation();
                }
                this.mathBuffer = "*";
                this.decimal = false;
                return this.totalValue;
            
            case "-":

                if ( this.mathBuffer === "" ) {
                    this.Subtraction();
                } else {
                    this.Operation();
                }
                this.mathBuffer = "-";
                this.decimal = false;
                return this.totalValue;
            
            case "+":

                if ( this.mathBuffer === "" ) {
                    this.Addition();
                } else {
                    this.Operation();
                }
                this.mathBuffer = "+";
                this.decimal = false;
                return this.totalValue;

            case "=":
                if ( this.mathBuffer !== "") {
                    this.Operation();
                }
                this.accrued = this.totalValue;
                this.mathBuffer = "=";
                this.decimal = false;
                this.mathOperation = true;
                return this.totalValue;
            
            case ".":
                if ( !this.decimal ) {
                    if ( this.totalValue === "0" || this.mathOperation ) {
                        this.totalValue = "0.";
                        this.mathOperation = false;
                    } else {
                        this.totalValue = `${this.totalValue}.`;
                    }
                    this.decimal = true;
                }
                return this.totalValue;
        
            default:
                if ( this.totalValue === "0" || this.mathOperation ) {
                    this.totalValue = k;
                    this.mathOperation = false;
                    return this.totalValue;
                }
                this.totalValue = `${this.totalValue}${k}`
                return this.totalValue;
        }
    }

    Operation(){
        switch (this.mathBuffer) {
            case "+":
                this.Addition();
                return;
            case "-":
                this.Subtraction();
                return;
            case "*":
                this.Multiplication();
                return;
            case "/":
                this.Division();
                return;

            default:
                return;
        }
    }

    Addition(){
        let total;
        if ( this.accrued === "0" ) {
            this.accrued = this.totalValue;
        } else {
            total = parseFloat(this.accrued) + parseFloat(this.totalValue);
            this.totalValue = total;
            this.accrued    = total;
        }
        this.mathOperation = true;

        console.log(this.accrued);
        return;
    }

    Subtraction(){
        let total;
        if ( this.accrued === "0" ) {
            this.accrued = this.totalValue;
        } else {
            total = parseFloat(this.accrued) - parseFloat(this.totalValue);
            this.totalValue = total;
            this.accrued    = total;
        }
        this.mathOperation = true;

        console.log(this.accrued);
        return;
    }

    Multiplication(){
        let total;
        if ( this.accrued === "0" ) {
            this.accrued = this.totalValue;
        } else {
            total = parseFloat(this.accrued) * parseFloat(this.totalValue);
            this.totalValue = total;
            this.accrued    = total;
        }
        this.mathOperation = true;

        console.log(this.accrued);
        return;
    }

    Division(){
        let total;
        if ( this.accrued === "0" ) {
            this.accrued = this.totalValue;
        } else {
            total = parseFloat(this.accrued) / parseFloat(this.totalValue);
            this.totalValue = total;
            this.accrued    = total;
        }
        this.mathOperation = true;

        console.log(this.accrued);
        return;
    }
    
}