import React, { useState } from 'react'

function Calculator(){
    const [calc, setCalc] = React.useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ''
    });

    function handleNumber(value){
        let newValue = value;

        if (!calc.isInitial){
            newValue = calc.current + value;
        }

        setCalc({current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp});
    }

    function handleOperator(value){
        const total = doCalculation();

        setCalc({current: total.toString(), total: total.toString(), isInitial: true, preOp: value});
    }

    function doCalculation(){
        let total = parseInt(calc.total);
        
        switch(calc.preOp){
            case '+':
                total += parseInt(calc.current);
            break;
            case '-':
                total -= parseInt(calc.current);
            break;
            case '*':
                total *= parseInt(calc.current);
            break;
            case '/':
                total /= parseInt(calc.current);
            break;
            default:
                total = parseInt(calc.current);
            break;
        }

        return total;
    }

    function handleClear(){
        setCalc({
            current: '0',
            total: '0',
            isInitial: true,
            preOp: ''
        });
    }

    function renderDisplay(){
        return calc.current;
    }

    return (
        <div className = 'calculator'>
            <div className = 'display'>{renderDisplay()}</div>

            <CalculatorButton className = 'calculatorButton' value = '7' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '8' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '9' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton-operator' value = '/' onClick = {handleOperator}/>

            <CalculatorButton className = 'calculatorButton' value = '4' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '5' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '6' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton-operator' value = '*'  onClick = {handleOperator}/>

            <CalculatorButton className = 'calculatorButton' value = '1' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '2' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '3' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton-operator' value = '-'  onClick = {handleOperator}/>

            <CalculatorButton className = 'calculatorButton' value = 'C' onClick = {handleClear}/>
            <CalculatorButton className = 'calculatorButton' value = '0' onClick = {handleNumber}/>
            <CalculatorButton className = 'calculatorButton' value = '=' onClick = {handleOperator}/>
            <CalculatorButton className = 'calculatorButton-operator' value = '+'  onClick = {handleOperator}/>
        </div>
    );
}

function CalculatorButton(props){
    return (
        <button className = {props.className} onClick = {() => props.onClick(props.value)}>{props.value}</button>
    );
}

export default Calculator;