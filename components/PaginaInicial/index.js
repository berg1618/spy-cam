import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import Perfil from "../Perfil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function PaginaInicialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

const PaginaInicial = (navigation) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Spy Cam</Text>
        {/* <Image source={require("../../assets/iconMenu.png")} /> */}
      </View>
      <View>
        <View>
          <Image source={require("../../assets/iconReconhecimento.png")} />
        </View>

        <Button
          title="Perfil"
          color="#747070"
          onPress={() => {
            navigation.navigate("Perfil");
          }}
        />
        <Button title="Notificações" color="#747070" />
        <Button title="Cadastrar rosto" color="#747070" />
        {/* <Image source={require("../../assets/iconNotificacao.png")} /> */}
      </View>
    </View>
  );
};

export default PaginaInicial;
