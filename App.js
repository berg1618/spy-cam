import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image source={require("./assets/pagina_incial.png")} />
        </View>

        <Button title="Perfil" color="#747070" />
        <Button title="Notificações" color="#747070" />
        <Button title="Cadastrar rosto" color="#747070" />
      </View>
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
