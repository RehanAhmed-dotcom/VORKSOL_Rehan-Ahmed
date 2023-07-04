import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../component/Colors';
const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  mainContainer: {
    marginTop: hp(5),
    alignItems: 'center',
  },
  mainTexts: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    width: '90%',
    marginTop: hp(5),
  },
  names: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    width: '45%',
  },
  mainText: {
    color: Colors.black,
  },
  inputContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    color: Colors.lightOrange,
  },
  dateOfBirth: {marginTop: 20},
  dateContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    justifyContent: 'center',
    height: 50,
  },
  dateText: {
    color: Colors.lightOrange,
  },
  email: {
    marginTop: 20,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    height: 50,
  },
  emailInput: {
    color: Colors.lightOrange,
    width: '90%',
  },
  buttonView: {
    marginTop: hp(5),
    alignItems: 'center',
  },
  privacyView: {
    width: 220,
  },
  privacyText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.black,
  },
  bottomView: {
    height: hp(30),
    width: '100%',
    backgroundColor: Colors.lightOrange,
    marginTop: hp(10),
    borderTopLeftRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 300,
  },
  bottomText: {
    color: Colors.white,
    textDecorationLine: 'underline',
  },
});
export default styles;
