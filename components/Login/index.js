import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './styles'
import React from "react";

const Login = () => {
  return (
    <View>
      <View>
        <Text style={styles.titleApp}>
          Spy Cam
        </Text>
      </View>

      <Image
        source={require('../../assets/iconReconhecimento.png')}
        />

        <View style={styles.formContainer}>
          
          <View style={styles.inputs}>
            <Image
              source={require('../../assets/iconNome.png')}
            />
            <TextInput
              placeholder="nome"
              keyboardType="text"
            />
          </View>

         
          <View style={styles.inputs}>
            <Image
              source={require('../../assets/iconPassword.png')}
            />
            <TextInput
              placeholder="senha"
              keyboardType="text"
            />
          </View>

          <TouchableOpacity>
              <Text>Login</Text>
          </TouchableOpacity>

          <Text>
            nao possui conta? <Text style={styles.textBold}>cadatsre-se</Text>
          </Text>
         
        </View>
    </View>
  );
}

export default Login