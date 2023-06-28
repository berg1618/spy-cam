import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import CadastrarConta from "./components/CadastrarConta";
import PaginaInicial from "./components/PaginaInicial";
import Perfil from "./components/Perfil";
import Notificacoes from "./components/Notificacoes";
import CadastrarRosto from "./components/CadastrarRosto";
import authMiddleware from "./middleware/authMiddleware";

const Stack = createNativeStackNavigator();

const ProtectedPaginaInicial = authMiddleware(PaginaInicial);
const ProtectedPerfil = authMiddleware(Perfil);
const ProtectedNotificacoes = authMiddleware(Notificacoes);
const ProtectedCadastrarRosto = authMiddleware(CadastrarRosto);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "login", headerShown: false }}
        />
        <Stack.Screen
          name="cadastrarConta"
          component={CadastrarConta}
          options={{ title: "cadastrarConta", headerShown: false }}
        />
        <Stack.Screen
          name="pageInicial"
          component={ProtectedPaginaInicial}
          options={{ title: "pageInicial", headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={ProtectedPerfil}
          options={{ title: "Perfil", headerShown: false }}
        />
        <Stack.Screen
          name="notificacoes"
          component={ProtectedNotificacoes}
          options={{ title: "notificacoes", headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarRosto"
          component={ProtectedCadastrarRosto}
          options={{ title: "CadastrarRosto", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
