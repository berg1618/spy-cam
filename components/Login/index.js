import axios from 'axios';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import styles from './styles';
import { cadastrarPerfilBanco } from '../../api';

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');
  const [encript, setEncript] = useState("")

  const createTwoButtonAlert = (title, msg) =>
    Alert.alert(title || 'Erro de autenticação!', msg, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);

  // #### nao deu certo
  const ecriptSenha = (senha) => {
    senha.split('').forEach((p) => {
      encript += p.replace(p, "*")
    })
  }

  const fazerLogin = async (email, senha) => {
    try {
      if (!email.trim() || !senha.trim()) {
        return createTwoButtonAlert('', 'Preencha todos os campos!');
      }

      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!isEmail.test(email)) {
        return createTwoButtonAlert('Erro', 'Informe um email válido!');
      }

      const usuariosResponse = await axios.get('/cadastro');

      const usuarios = usuariosResponse.data;
      const usuario = usuarios.find((user) => user.email === email);
  
      if (!usuario) {
        return createTwoButtonAlert('Erro', 'Login não encontrado!');
      }

      // const response = await axios.post('/auth/login', {
      //   email: email,
      //   senha: senha,
      // });

      // const token = response.data.access_token;

      // console.log(`email: ${email}, senha: ${senha}, token: ${token}`);

      // await cadastrarPerfilBanco(formData, token);

      navigation.navigate('pageInicial');
    } catch (err) {
      createTwoButtonAlert('Problemas :-(', '');
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
            <View style={styles.entrada}>
              <Image style={styles.icon} source={require('../../assets/iconEmail.png')} />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChangeEmail}
                value={email}
              />
            </View>
            <View>
              <Text>____________________________</Text>
            </View>

            <View style={styles.entrada}>
              <Image style={styles.icon} source={require('../../assets/iconPassword.png')} />
              <TextInput
                style={styles.inputText}
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={onChangeSenha}
                value={senha}
              />
            </View>
            <View>
              <Text>____________________________</Text>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                fazerLogin(email, senha);
              }}
            >
              <Text style={styles.textButtonNavigation}>Login</Text>
            </TouchableOpacity>

            <Text
              onPress={() => {
                navigation.navigate('cadastrarConta');
              }}
              style={styles.mensagem}
            >
              Não possui conta? <Text style={styles.textBold}>Cadastre-se</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
