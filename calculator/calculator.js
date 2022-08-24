//creates an object to keep track of values
const Calculator = {
    //displays 0 on the screen
    Display_Value: '0',
    //hold first operand for any expressions
    First_Operand: null,
    //checks wether ot not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    operator: null,
};

//modifies value each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //this checks to see if waitoperand is true and sets display value
    //to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites displayvalue if current value is 0
        //otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//section handles decimal points
function Input_Decimal(dot) {
    //ensures accidental clicking of decimanl doesnt cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; //saying that id displayvalue does not contain a decimal
        //we want to add a decimal
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we convert the current number
    //on screen to a number then store the result in the 
    //calculator.firstoperand if it doesnt already exist
    const Value_Of_Input = parseFloat(Display_Value); 
    //checks if operator already exists and if waitoperand is true
    //then updates the operator and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_Of_Input;
    } else if (operator) { // checks if operator exists already
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is preformed for the 
        //operator in the preform calculation object and the func
        //that matches the operator is executed
        let result = Preform_Calculation[operator](Value_Now, Value_Of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Preform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//this function updates the calculator screen with contents of displayvalue
function Update_Display() {
    //makes use of the calculator-screen class to target
    //input tag in html doc
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that reps the 
    //element that was clicked
    const { target } = event;
    //if the element clicked on was not a button, exit func
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
}) 