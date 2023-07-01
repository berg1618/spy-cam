import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PaginaInicial from "./components/PaginaInicial";
import Perfil from "./components/Perfil";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import CadastrarConta from "./components/CadastrarConta";
import Notificacoes from "./components/Notificacoes";
import CadastrarRosto from "./components/CadastrarRosto";

import { CreatNotification } from "./Notification/notifications";

import { register } from "./utils/tasks";



const Stack = createNativeStackNavigator();


// const registerTesk = () => {
//   register()
//   .then(() => console.log("task registrada"))
//   .catch(() => console.log('falha ao registrar'))
// }


function App() {

  React.useEffect(() => {
    CreatNotification()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}
          options={{ title: "login", headerShown: false }}
        />
        <Stack.Screen name="cadastrarConta" component={CadastrarConta}
          options={{ title: "cadastrarConta", headerShown: false }}
        />
        <Stack.Screen name="pageInicial" component={PaginaInicial}
          options={{ title: "pageInicial", headerShown: false }}
        />
        <Stack.Screen name="Perfil" component={Perfil}
          options={{ title: "Perfil", headerShown: false }}
        />
        <Stack.Screen name="notificacoes" component={Notificacoes}
          options={{ title: "notificacoes", headerShown: false }}
        />
        <Stack.Screen name="CadastrarRosto" component={CadastrarRosto}
          options={{ title: "CadastrarRosto", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
