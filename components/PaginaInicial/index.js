import { Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import styles from "./styles";
import CustomizedBar from "../CustomizedBar/CustomizedBar";

const PaginaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomizedBar />
      <View style={styles.header}>
        <Text style={styles.title}>Spy Cam</Text>
      </View>
      <TouchableOpacity style={styles.circleButton}>
        <FontAwesomeIcon name='bell' size={40} color='#413C45' style={{ marginTop: 21, marginHorizontal: 24 }} />
      </TouchableOpacity>
      <View style={styles.main}>
        <View>
          <Image style={styles.imgLogo} source={require("../../assets/iconReconhecimento.png")} />
        </View>

        <View style={styles.optionsNavgation}>

          <TouchableOpacity
            style={styles.buttonsNavgations}
            onPress={() => {
              navigation.navigate("Perfil");
            }}
          >
            <Text style={styles.textButtonNavigation}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("notificacoes")
            }}
            style={styles.buttonsNavgations}>
            <Text style={styles.textButtonNavigation}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonsNavgations}
            onPress={() => {
              navigation.navigate("CadastrarRosto");
            }}
          >
            <Text style={styles.textButtonNavigation}>Cadastrar Rosto</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
};

export default PaginaInicial;
