import {View, Text, Image, TouchableOpacity} from 'react-native';
import Colors from '../Colors';

export default FocusItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => item.name == 'Images' && navigation.navigate('ImagesShow')}
      style={{
        height: 200,
        width: 140,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: 'space-between',
        margin: 20,
        padding: 20,
        elevation: 3,
      }}>
      <Image
        resizeMode="contain"
        tintColor={item.name == 'Images' ? 'none' : Colors.blue}
        source={item.image}
        style={{height: 80, width: 80}}
      />
      <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
