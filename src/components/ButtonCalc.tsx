import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';
import { styles } from '../theme/appTheme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  text: string;
  bgColor?: string;
  width?: boolean;
  action: (action: string) => void; 
};

const sizeButton: number = wp(18);
const wideButton: number = ((sizeButton * 2) + wp(4));

const ButtonCalc = ({ text, width, action, bgColor = '#413B3B' }: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{
        ...styles.buttonContainer,
        backgroundColor: bgColor,
        width: width ? wideButton : sizeButton,
      }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
