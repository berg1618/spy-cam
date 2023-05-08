import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";
import styles from './styles.js'
import React, {useState} from "react";

const CadastrarConta = ({navigation}) => {
  const [nome, onChangeNome] = useState("")
  const [email, onChangeEmail] = useState("")
  const [senha, onChangeSenha] = useState("")
  const [confSenha, onChangeConfSenha] = useState("")

  const createTwoButtonAlert = (title, msg) =>
  Alert.alert(title? title: 'Erro de autenticação!', msg, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);


  const cadastrarUsuario = async (nome, email, senha, confSenha) => {
    try {
      // exibir alerta caso algum campo esteja vazio
     if (!nome || !email || !senha || !confSenha) {
         return createTwoButtonAlert("", "Preencha todos os campos!")
     }

    // verificar se senha e confirmacao sao iguais
    if (senha != confSenha) {
      return createTwoButtonAlert("Erro!", "as senhas que você digitou não são iguais!")
    }
    
      navigation.navigate("pageInicial");
    }
    catch (err) {
      // ### essa msg pode ser substituida por uma mais personalizada
      createTwoButtonAlert("problemas : -( ", "")
    }
  }

  return (
    // <View style={styles.b}>
      <SafeAreaView style={styles.b}>
        <ScrollView style={styles.scroll}>
          <View style={styles.containerCenter}>
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

              <Text style={styles.titleContainer}>Faça seu cadastro</Text>
              <View style={styles.entrada}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/iconNome.png')} 
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Nome"
                  keyboardType="default"
                  onChangeText={onChangeNome}
                  value={nome}
                />
              </View>
              <View> 
              <Text>____________________________</Text>
              </View>


              <View style={styles.entrada}>
              <Image
                style={styles.icon} 
                source={require('../../assets/iconEnail.png')}
              />
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={onChangeEmail}
                  value={email}
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
                  keyboardType="default"
                  onChangeText={onChangeSenha}
                  value={senha}
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
                  placeholder=" Confirme sua senha"
                  keyboardType="default"
                  onChangeText={onChangeConfSenha}
                  value={confSenha}
                />
              </View>
              <View> 
              <Text>____________________________</Text>
              </View>

              <TouchableOpacity
                onPress={() => cadastrarUsuario(nome, email, senha, confSenha)}
              >
                  <Text style={styles.botao}>Cadastre-se</Text>
              </TouchableOpacity>

              <Text
                onPress={() => {
                navigation.navigate("login")
              }}
              style={styles.mensagem}>
                Ja possui conta? <Text style={styles.textBold}>Login</Text>
              </Text>
            
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    // </View>
  );
}

export default CadastrarConta;