import { Image, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView } from "react-native";
import styles from './styles'
import React, {useState} from "react";
import { async } from "rxjs";

const Login = ({navigation}) => {
  const [nome, onChangeNome] = useState("")
  const [senha, onChangeSenha] = useState("")
  const [encript, setEncript] = useState("")


  const createTwoButtonAlert = (title, msg) =>
  Alert.alert(title? title: 'Erro de autenticação!', msg, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  
    // #### nao deu certo
  const ecriptSenha = (senha) => {
      senha.split('').forEach((p) => {
      encript += p.replace(p, "*")
    })
  }

  const fazerLogin = async (nome, senha) => {
    try {
      // exibir alerta caso nome e senha estejam vazios
     if (!nome || !senha) {
      return createTwoButtonAlert("", "Preencha todos os campos!")
     }

      navigation.navigate("pageInicial");
    }
    catch (err) {
      // ### essa msg pode ser substituida por uma mais personalizada
      createTwoButtonAlert("problemas : -(", "")
    }
  }

  return (
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
            
            <Text style={styles.titleContainer}>Faça seu Login</Text>
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

            <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                fazerLogin(nome, senha)
              }}
            >
              <Text style={styles.textButtonNavigation}>Login</Text>
            </TouchableOpacity>
            
            
            <Text
              onPress={() => {
              navigation.navigate("cadastrarConta")
            }}
            style={styles.mensagem}>
              Não possui conta? <Text style={styles.textBold}>Cadastre-se</Text>
            </Text>
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login