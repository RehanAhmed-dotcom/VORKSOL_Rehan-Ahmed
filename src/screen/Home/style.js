import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../component/Colors';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {marginHorizontal: 20, marginTop: hp(5)},
  focus: {
    fontSize: 24,
    marginTop: hp(5),
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
