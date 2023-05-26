import { NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Perfil from './Screens/Perfil';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Other" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Perfil"
      onPress={() => navigation.navigate('Perfil')}
    />
  );
}


export default AppNavigator;