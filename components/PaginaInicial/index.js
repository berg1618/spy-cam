import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";




const PaginaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleApp}>Spy Cam</Text>
        <Image
        style={styles.Modal}
        source={require("../../assets/iconMenu.png")} />
      </View>

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

          <TouchableOpacity style={styles.buttonsNavgations}>
              <Text style={styles.textButtonNavigation}>Cadastrar rosto</Text>
          </TouchableOpacity>

        </View>
       
      </View>

      <Image style={styles.iconNotifications} source={require("../../assets/iconNotificacao.png")} />
    </View>
  );
};

// function PaginaInicialStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Perfil" component={Perfil} />
//     </Stack.Navigator>
//   );
// }

export default PaginaInicial;
