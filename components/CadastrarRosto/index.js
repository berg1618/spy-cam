import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert, SafeAreaView, FlatList, ScrollView } from 'react-native';
import styles from "./styles";
import Header from '../Header';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import * as ImagePicker from 'expo-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { cadastrarPerfilBanco } from '../../api';

// nada

//vai rederizar um item
const Item = ({item}) => (
    <Image style={{width: 70, height: 70, margin: 5}}
      source={{uri: item}}
    />
);

const CadastrarRosto = () => {

  const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [arrayImages, setArrayImages] = useState([])
  const [nomePessoa, onChangeNome] = useState(null);


    // rederezar a imagem
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
       />
    );
  };

  // cadastrar perfil
  const cadastrarPerfil = async () => {

    const formData = new FormData()

    formData.append('nome_pessoa', nomePessoa)   

    formData.append('fotos', {
        name: 'image.jpg',
        uri: imagem,
        type: 'image/jpg'
    })

    // arrayImages.forEach((image) => {
    //   formData.append('fotos', {
    //     name: 'image.png',
    //     uri: image,
    //     type: 'image/png'
    //   })
    // })
    
    const req = await cadastrarPerfilBanco(formData)
    console.log(req.status)
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
      base64: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setArrayImages([...arrayImages, result.assets[0].uri])
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
    <SafeAreaView style={styles.container}>
       <ScrollView>
        <View>
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

                <TouchableOpacity onPress = {() => {
                  AlertaConfirma()
                  cadastrarPerfil()
                }}>
                  <Text style={styles.botaoCadastrar}>Cadastrar Novo Rosto</Text>
                </TouchableOpacity>
        </View>

        {/* exibir este componente apenas se tiver imagens*/}
        {/* caso contrario, exibir uma view vazia */}
        {/* {
          arrayImages.length > 0?
          <View
             style={styles.listImages}>
            <FlatList
              horizontal={false}
              image      numColumns={3}
              data={arrayImages}
              renderItem={renderItem}
              keyExtractor={item => item}
            />
           </View>
          :
          <View></View>
        } */}

        <View style={styles.listImages}>
          {imagem && <Image source={{ uri: imagem }} style={styles.img} />}
        </View>

        </View>
      
      </ScrollView>
    </SafeAreaView >

  );
};

export default CadastrarRosto;