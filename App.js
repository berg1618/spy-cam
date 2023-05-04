import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PaginaInicial from "./components/PaginaInicial";
import Perfil from "./components/Perfil";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import CadastrarConta from "./components/CadastrarConta";
import Notificacoes from "./components/Notificacoes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
         <Stack.Screen name="cadastrarConta" component={CadastrarConta} />
        <Stack.Screen name="pageInicial" component={PaginaInicial}
          options={{title: "pageInicial", headerShown: false}}
        />
        <Stack.Screen name="Perfil" component={Perfil}
        options={{title: "Perfil", headerShown: false}}
        />
        <Stack.Screen name="notificacoes" component={Notificacoes}
        options={{title: "notificacoes", headerShown: false }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
