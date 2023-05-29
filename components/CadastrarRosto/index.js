import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import styles from "./styles";
import Header from '../Header';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import * as ImagePicker from 'expo-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { cadastrarPerfilBanco } from '../../api';


const CadastrarRosto = () => {

  const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [nomePessoa, onChangeNome] = useState(null);

  const cadastrarPerfil = async () => {
    const formData = new FormData()

    formData.append('nome_pessoa', nomePessoa)

    // pegar o nome da imagem
    // const fileName = imagem[0].uri.substring(imagem[0].uri.lastIndexOf('/' + 1), imagem[0].uri.length)
    const separaOsBagaco = imagem.split(':')[1]
    // const fileName = imagem.substring(imagem.lastIndexOf('/' + 1), imagem.length)
    const fileName  = separaOsBagaco.split(',')[0]
    console.log(fileName)

    console.log(fileName)
    formData.append('fotos', JSON.parse(JSON.stringify({
      name: fileName,
      uri: imagem,
      type: 'image/png'
    })))

    // console.log(formData)
    
    const req = await cadastrarPerfilBanco(formData)
    console.log(req)
  }

  useEffect(() => {
    (async () => {
      const statusGaleria = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissaoGaleria(statusGaleria.status === 'granted')
    })();
  }, []);

  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: false, // #### tirar se nao der certo ########
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  if (permissaoGaleria === false) {
    return <Text>Sem Permissão Concedida à Galeria</Text>
  }

const AlertaConfirma =() => {
    Alert.alert(
      'Foto Cadastrada',
      'Sua Foto foi cadastrada com sucesso.'
    );
  }

  return (
    <View style={styles.container}>
      <CustomizedBar />
      <Header />
      <TouchableOpacity style={styles.circleButton}>
        <FontAwesomeIcon name='bell' size={40} color='#413C45' style={{ marginTop: 21, marginHorizontal: 24 }} />
      </TouchableOpacity>
      <Text style={styles.newTitle}>Cadastrar Rosto</Text>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
        <View style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/iconrosto.png')} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <Text style={styles.anotherTitle}>Maria</Text>
          <View style={styles.anotherLine} />
        </View>
      </View>
      <View style={styles.anotherContentContainer}> 
      <View style={styles.entrada}>
        <Image 
          style={styles.icon}
          source={require('../../assets/iconNome.png')}/>
            <TextInput
              style={styles.inputText}
              placeholder="Nome"
              keyboardType="default"
              onChangeText={onChangeNome}
              value={nomePessoa}/>
            </View>
            <View style={styles.anotherLine} /> 
              <TouchableOpacity onPress={() => selecionarImagem()}>
                <Text style={styles.botao}><Image source={require('../../assets/ImageFile.png')} style={{ width: 20, height: 20, paddingLeft: 5 }} />Escolher Arquivos</Text>
              </TouchableOpacity>
              <View style={styles.containerImagem}>
                {imagem && <Image source={{ uri: imagem }} style={{ width: 70, height: 70 }} />}
                </View>
              <TouchableOpacity onPress = {() => {
                AlertaConfirma()
                cadastrarPerfil()
              }}>
                <Text style={styles.botaoCadastrar}>Cadastrar Novo Rosto</Text>
              </TouchableOpacity>
      </View>
    </View>

  );
};

export default CadastrarRosto;