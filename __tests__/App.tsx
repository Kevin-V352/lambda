import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <LinearGradient colors={['#463D3E', '#2A2122']} style={{ flex: 1}}>
        <StatusBar 
          backgroundColor='transparent'
          translucent={ true }
          barStyle='light-content'
        />
        <CalculatorScreen/>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
