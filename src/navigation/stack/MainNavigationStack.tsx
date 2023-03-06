import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRouter from '../routes';
import { defaultOptions } from '../helpers';

import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator();

function MainNavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRouter.AUTH.HOME}
        component={HomeScreen}
        options={defaultOptions(true)}
      />
    </Stack.Navigator>
  );
}

export default MainNavigationStack;
