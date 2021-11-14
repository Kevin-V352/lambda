import { StyleSheet } from "react-native";
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

const pallete = {
  primaryText: 'white',
  secondaryText: 'rgba(255, 255, 255, 0.5)'
};

const pressets = {
  font: 'Quicksand-Regular'
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black', 
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: wp(8)
  },
  number: {
    color: pallete.primaryText,
    fontSize: wp(18),
    marginBottom: hp(2),
    fontFamily: pressets.font
  },
  previousNumber: {
    fontSize: wp(12),
    color: pallete.secondaryText,
    fontFamily: pressets.font
  },
  buttonContainer: {
    borderRadius: wp(4.5),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(10),
    marginBottom: hp(2)
  },
  buttonText: {
    color: pallete.primaryText,
    fontSize: wp(8),
    fontFamily: pressets.font,
    marginBottom: hp(1),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
});