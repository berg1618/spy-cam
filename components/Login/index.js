import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './styles'
import React from "react";

const Login = () => {
  return (
    <View style={styles.b}>
      <View>
        <Text style={styles.titleApp}>
          Spy Cam
        </Text>
      </View>

      <Image 
        style={styles.logo}
        source={require('../../assets/iconReconhecimento.png')}
        />

        <View style={styles.formContainer}>
          
          <Text style={styles.titleContainer}>Faça seu Login</Text>
          <View style={styles.entrada}>
            <Image
              style={styles.icon}
              source={require('../../assets/iconNome.png')}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Nome"
              keyboardType="text"
            />
          </View>
          <View> 
          <Text>____________________________</Text>
          </View>

         
          <View style={styles.entrada}>
            <Image
              style={styles.icon}
              source={require('../../assets/iconPassword.png')}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Senha"
              keyboardType="text"
            />
          </View>
          <View> 
          <Text>____________________________</Text>
          </View>

          <TouchableOpacity>
              <Text style={styles.botao}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.mensagem}>
            Não possui conta? <Text style={styles.textBold}>Cadastre-se</Text>
          </Text>
         
        </View>
    </View>
  );
}

export default Login