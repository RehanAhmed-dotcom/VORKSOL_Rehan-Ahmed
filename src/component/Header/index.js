import {View, Text, Image} from 'react-native';

export default Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{color: 'black', fontSize: 16}}>Welcome</Text>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Mr.Steve,
        </Text>
      </View>
      <Image
        source={require('../Images/images.jpeg')}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
    </View>
  );
};
