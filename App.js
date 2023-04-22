import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/";
import React from "react";
export default function App() {
  // style={styles.container}
  return (
    <View >
      {/* <View> */}
        {/* <View>
          <Image source={require("./assets/pagina_incial.png")} />
          <Text>ou sou claudio</Text>
        
        </View> */}

        {/* ##########----############ */}
        {/* vcs podem chamar seu componente aqui para poder testar */}
        
        <Login />
         {/* ##########----############ */}

        {/* <Button title="Perfil" color="#747070" />
        <Button title="Notificações" color="#747070" />
        <Button title="Cadastrar rosto" color="#747070" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
