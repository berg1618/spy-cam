import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";
import styles from './styles.js'
import React, { useState } from "react";
import { cadastrarUsuarioBanco } from "../../api.js"

const CadastrarConta = ({ navigation }) => {
  const [nome, onChangeNome] = useState("")
  const [email, onChangeEmail] = useState("")
  const [senha, onChangeSenha] = useState("")
  const [confSenha, onChangeConfSenha] = useState("")

  const createTwoButtonAlert = (title, msg) =>
    Alert.alert(title ? title : 'Erro de autenticação!', msg, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const cadastrarUsuario = async (nome, email, senha, confSenha) => {
    try {
      if (!nome || !email || !senha || !confSenha) {
        return createTwoButtonAlert("", "Preencha todos os campos!")
      }

      if (senha !== confSenha) {
        return createTwoButtonAlert("Erro!", "As senhas que você digitou não são iguais!")
      }

      const a = await cadastrarUsuarioBanco(nome, email, senha)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

      navigation.navigate("login");
    } catch (err) {
      createTwoButtonAlert("Problemas :-( ", "")
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.b}>
      <ScrollView style={styles.scroll}>
        <View style={styles.containerCenter}>
          <View>
            <Text style={styles.titleApp}>Spy Cam</Text>
          </View>

          <Image
            style={styles.logo}
            source={require('../../assets/iconReconhecimento.png')}
          />

          <View style={styles.formContainer}>
            <Text style={styles.titleContainer}>Faça seu cadastro</Text>

            <View style={styles.entrada}>
              <View style={styles.inputWrapper}>
                <Image style={styles.icon} source={require('../../assets/iconNome.png')} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Nome"
                  keyboardType="default"
                  onChangeText={onChangeNome}
                  value={nome}
                />
              </View>
            </View>

            <View style={styles.entrada}>
              <View style={styles.inputWrapper}>
                <Image style={styles.icon} source={require('../../assets/iconEmail.png')} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={onChangeEmail}
                  value={email}
                />
              </View>
            </View>

            <View style={styles.entrada}>
              <View style={styles.inputWrapper}>
                <Image style={styles.icon} source={require('../../assets/iconPassword.png')} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Senha"
                  autoCapitalize="none"
                  secureTextEntry
                  keyboardType="default"
                  onChangeText={onChangeSenha}
                  value={senha}
                />
              </View>
            </View>

            <View style={styles.entrada}>
              <View style={styles.inputWrapper}>
                <Image style={styles.icon} source={require('../../assets/iconPassword.png')} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Confirme sua senha"
                  autoCapitalize="none"
                  secureTextEntry
                  keyboardType="default"
                  onChangeText={onChangeConfSenha}
                  value={confSenha}
                />
              </View>
            </View>

            <TouchableOpacity onPress={() => cadastrarUsuario(nome, email, senha, confSenha)}>
              <Text style={styles.botao}>Cadastre-se</Text>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate("login")} style={styles.mensagem}>
              Já possui conta? <Text style={styles.textBold}>Login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CadastrarConta;
