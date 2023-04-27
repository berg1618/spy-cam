import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './styles.js'
import React from "react";

const CadastrarConta = () => {
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

          <Text style={styles.titleContainer}>Faça seu cadastro</Text>
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
            source={require('../../assets/iconEnail.png')}
           />
            <TextInput
              style={styles.inputText}
              placeholder="Email"
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

          <View style={styles.entrada}>
            <Image
              style={styles.icon}
              source={require('../../assets/iconPassword.png')}
            />
            <TextInput
              style={styles.inputText}
              placeholder=" Confirme sua senha"
              keyboardType="text"
            />
          </View>
          <View> 
          <Text>____________________________</Text>
          </View>



          <TouchableOpacity>
              <Text style={styles.botao}>Cadastre-se</Text>
          </TouchableOpacity>

          <Text style={styles.mensagem}>
            Ja possui conta? <Text style={styles.textBold}>Login</Text>
          </Text>
         
        </View>
    </View>
  );
}

export default CadastrarConta;