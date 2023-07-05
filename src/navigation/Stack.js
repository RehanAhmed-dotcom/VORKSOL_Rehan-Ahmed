import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Signup from '../screen/Signup';
import ImagesShow from '../screen/ImagesShow';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ImagesShow" component={ImagesShow} />
    </Stack.Navigator>
  );
}
export default MyStack;
