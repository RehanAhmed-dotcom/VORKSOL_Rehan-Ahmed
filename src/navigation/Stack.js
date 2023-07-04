import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Signup from '../screen/Signup';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default MyStack;
