import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';
import SplashScreen from 'react-native-splash-screen'

const CalculatorScreen = () => {

  const {
    number,
    previousNumber,
    clear,
    buildNumber,
    reverseNumber,
    deleteLastNumber,
    assignOperation,
    calculate
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style= {styles.calculatorContainer}>
      {
        previousNumber !== '0' && (
        <Text style={styles.previousNumber}>
          {previousNumber}
        </Text>)
      }
      <Text 
        style={styles.number}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text='C' bgColor='#575151' action={clear} />
        <ButtonCalc text='+/-' bgColor='#575151' action={reverseNumber} />
        <ButtonCalc text='del' bgColor='#575151' action={deleteLastNumber} />
        <ButtonCalc text='÷' bgColor='#ff9501' action={assignOperation} />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text='7' action={buildNumber} />
        <ButtonCalc text='8' action={buildNumber} />
        <ButtonCalc text='9' action={buildNumber} />
        <ButtonCalc text='×' bgColor='#ff9501' action={assignOperation} />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text='4' action={buildNumber} />
        <ButtonCalc text='5' action={buildNumber} />
        <ButtonCalc text='6' action={buildNumber} />
        <ButtonCalc text='−' bgColor='#ff9501' action={assignOperation} />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text='1' action={buildNumber} />
        <ButtonCalc text='2' action={buildNumber} />
        <ButtonCalc text='3' action={buildNumber} />
        <ButtonCalc text='+' bgColor='#ff9501' action={assignOperation} />
      </View>
      <View style={ styles.row }>
        <ButtonCalc text='0' action={buildNumber} width />
        <ButtonCalc text='.' action={buildNumber} />
        <ButtonCalc text='=' bgColor='#ff9501' action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
