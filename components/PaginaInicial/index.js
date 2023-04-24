import { Button, Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const PaginaInicial = () => {
  return (
    <View style={styles}>
      <View>
        <Text style={styles.titleApp}>Spy Cam</Text>
        <Image source={require("../../assets/iconMenu.png")} />
      </View>
      <View>
        <View>
          <Image source={require("../../assets/iconReconhecimento.png")} />
        </View>

        <Button title="Perfil" color="#747070" />
        <Button title="Notificações" color="#747070" />
        <Button title="Cadastrar rosto" color="#747070" />

        <Image source={require("../../assets/iconNotificacao.png")} />

      </View>
    </View>
  );
};

export default PaginaInicial;
