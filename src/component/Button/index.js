import {Text, TouchableOpacity} from 'react-native';
import Colors from '../Colors';

export default Button = ({name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.darkOrange,
        width: 200,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: Colors.white}}>{name}</Text>
    </TouchableOpacity>
  );
};
