import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from "./styles";
import Header from '../Header';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import * as ImagePicker from 'expo-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const CadastrarRosto = () => {

  /*const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [imagem, setImagem] = useState(null);

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  if (permissaoGaleria === false) {
    return <Text>Sem Permissão Concedida à Galeria</Text>
  }*/

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
              keyboardType="default"/>
            </View>
            <View style={styles.anotherLine} /> 
              <TouchableOpacity>
                <Text style={styles.botao}><Image source={require('../../assets/ImageFile.png')} style={{ width: 20, height: 20, paddingLeft: 5 }} />Escolher Arquivos</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.botaoCadastrar}>Cadastrar Novo Rosto</Text>
              </TouchableOpacity>
      </View>
    </View>

  );
};

export default CadastrarRosto;