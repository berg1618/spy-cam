import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './styles'
import React from "react";

const CadastrarConta = () => {
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
          <Text>Faça seu cadastro</Text>

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
           source={require('../../assets/iconEnail.png')}
           />
            <TextInput
              placeholder="Email"
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
          </View><View style={styles.inputs}>
            <Image
              source={require('../../assets/iconPassword.png')}
            />
            <TextInput
              placeholder=" Confirme sua senha"
              keyboardType="text"
            />
          </View>



          <TouchableOpacity>
              <Text>Cadastre-se</Text>
          </TouchableOpacity>

          <Text>
            Ja possui conta? <Text style={styles.textBold}>Login</Text>
          </Text>
         
        </View>
    </View>
  );
}

export default CadastrarConta