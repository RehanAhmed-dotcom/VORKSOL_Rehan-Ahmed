import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import CheckIcon from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Colors from '../../component/Colors';
import Button from '../../component/Button';
const Signup = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const validateEmail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.replace(/\s/g, ''),
    );
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    hideDatePicker();
    setDate(moment(date).format('DD | MMMM | YYYY'));
  };
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTexts}>Sign Up</Text>
        <View style={styles.info}>
          <View style={styles.names}>
            <View style={styles.nameContainer}>
              <Text style={styles.mainText}>First Name</Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputContainer}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.mainText}>Last Name</Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputContainer}
              />
            </View>
          </View>
          <TouchableOpacity onPress={showDatePicker} style={styles.dateOfBirth}>
            <Text style={styles.mainText}>Date of Birth</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
          <View style={styles.email}>
            <Text style={styles.mainText}>Your Email</Text>
            <View style={styles.emailContainer}>
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
                style={styles.emailInput}
              />
              {validateEmail(email) && (
                <CheckIcon name="check" size={20} color={Colors.darkOrange} />
              )}
            </View>
          </View>
          <View style={styles.email}>
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={'grey'}
              style={styles.inputContainer}
            />
          </View>
          <View style={styles.buttonView}>
            <Button name="Sign Up" onPress={() => navigation.replace('Home')} />
            <View style={styles.privacyView}>
              <Text style={styles.privacyText}>
                By signing up you agree to our Terms of Use and Privacy Policy
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Our Terms and Conditions</Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;
