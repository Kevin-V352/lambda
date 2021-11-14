import React, { useState, useRef } from 'react';

enum Operators {
  divide,
  multiply,
  subtract,
  add
};

const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');
  const lastOperation = useRef<Operators>();

  const clear = () => setNumber('0');

  const buildNumber = (numericText: string) => {

    //Do not accept double point
    if (number.includes('.') && numericText === '.') return;

    //Consideration in case the number starts in "0" or "-0"
    if (number.startsWith('0') || number.startsWith('-0')) {

      //Decimal point
      if (numericText === '.') setNumber(number + numericText);

      //Evaluate another zero with an existing point
      else if (numericText === '0' && number.includes('.')) setNumber(number + numericText)

      //Evaluate if the incoming number is different from "0" and there is no point
      else if (numericText !== '0' && !number.includes('.')) setNumber(numericText)

      //Avoid syntax problem: 000.0
      else if(numericText === '0' && !number.includes('.')) setNumber(numericText);

      else { 
        setNumber (number + numericText);
      };
    }
    else {
      setNumber(number + numericText);
    };
  };

  const reverseNumber = () => {
    number.includes('-') ? setNumber(number.replace('-', '')) : setNumber('-' + number);
  };

  const deleteLastNumber = () => {
    const isNegative: number = number.includes('-') ? 2 : 1;
    
    (number.length === isNegative) ? setNumber('0') : setNumber(number.slice(0, -1));
  };

  const changeByPreviousNumber = () => {
    number.endsWith('.') ? setPreviousNumber(number.slice(0, -1)) : setPreviousNumber(number);
    setNumber('0');
  };

  const assignOperation = (operator: string) => {
    changeByPreviousNumber();

    switch (operator) {
      case '÷':
        lastOperation.current = Operators.divide;
        break;
      case '×':
        lastOperation.current = Operators.multiply;
        break;
      case '−':
        lastOperation.current = Operators.subtract;
        break;
      case '+':
        lastOperation.current = Operators.add;
        break;
    };
  };

  const calculate = () => {
    const number1: number = Number(number);
    const number2: number = Number(previousNumber);

    if (number1 === 0 && number2 === 0) return;

    switch (lastOperation.current) {
      case Operators.divide:
        console.log('men')
        setNumber(`${number2 / number1}`);
        break;
      case Operators.multiply:
        setNumber(`${number1 * number2}`);
        break;
      case Operators.subtract:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.add:
        setNumber(`${number1 + number2}`);
        break;
    };

    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    clear,
    buildNumber,
    reverseNumber,
    deleteLastNumber,
    assignOperation,
    calculate
  };
};

export default useCalculator;