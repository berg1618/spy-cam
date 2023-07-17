import { Image, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import CustomizedBar from "../CustomizedBar/CustomizedBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeToken } from "../../api";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //const [encript, setEncript] = useState("")

  const createTwoButtonAlert = (title, msg) =>
    Alert.alert(title ? title : 'Erro de autenticação!', msg, [
      { text: 'OK' },
    ]);

  // #### nao deu certo
  // const ecriptSenha = (senha) => {
  // senha.split('').forEach((p) => {
  //   encript += p.replace(p, "*")
  // })
  // }

  const fazerLogin = async () => {
    if (!email || !senha) {
      return createTwoButtonAlert("", "Preencha todos os campos!");
    }
  
    try {
      const response = await storeToken(email, senha);
      const token = response.data.access_token;
  
      await AsyncStorage.setItem('access_token', token);

      navigation.navigate("pageInicial");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        createTwoButtonAlert("Erro", "Dados inválidos.");
      } else {
        createTwoButtonAlert("Erro", "Erro não especificado ;-;");
      }
    }
  };

  return (
    <SafeAreaView style={styles.b}>
      <ScrollView style={styles.scroll}>
        <View style={styles.containerCenter}>
          <CustomizedBar />
          <View>
            <Text style={styles.titleApp}>Spy Cam</Text>
          </View>

          <Image style={styles.logo} source={require('../../assets/iconReconhecimento.png')} />

          <View style={styles.formContainer}>
            <Text style={styles.titleContainer}>Faça seu Login</Text>

            <View style={styles.inputContainer}>
              <Image style={styles.icon} source={require('../../assets/iconEmail.png')} />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#8B8989"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.icon} source={require('../../assets/iconPassword.png')} />
              <TextInput
                style={styles.inputText}
                placeholder="Senha"
                placeholderTextColor="#8B8989"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={setSenha}
                value={senha}
              />
            </View>

            <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
              <Text style={styles.textButtonNavigation}>Login</Text>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate("cadastrarConta")} style={styles.mensagem}>
              Não possui conta? <Text style={styles.textBold}>Cadastre-se</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;