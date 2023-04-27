import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './Screens/Perfil';

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <View>
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Profile" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
