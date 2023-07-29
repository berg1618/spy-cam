import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert, SafeAreaView, ScrollView, Modal, StyleSheet } from 'react-native';
import styles from "./styles";
import Header from '../Header';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import * as ImagePicker from 'expo-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { cadastrarPerfilBanco } from '../../api';

const Item = ({ item }) => (
  <Image style={{ width: 70, height: 70, margin: 5 }} source={{ uri: item }} />
);

const CadastrarRosto = () => {
  const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [arrayImages, setArrayImages] = useState([]);
  const [nomePessoa, onChangeNome] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setImagem(null);
    setShowConfirmation(false);
  };

  const cadastrarPerfil = async () => {
    const formData = new FormData();
    formData.append('nome_pessoa', nomePessoa);

    formData.append('fotos', {
      name: 'image.jpg',
      uri: imagem,
      type: 'image/jpg'
    });

    const req = await cadastrarPerfilBanco(formData);
  };

  useEffect(() => {
    (async () => {
      const statusGaleria = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissaoGaleria(statusGaleria.status === 'granted');
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
      setImagem(result.assets[0].uri);
      setShowConfirmation(true);
    }
  };

  if (permissaoGaleria === false) {
    return <Text>Sem Permissão Concedida à Galeria</Text>;
  }

  const AlertaConfirma = () => {
    if (!nomePessoa) {
      Alert.alert('Nome Vazio', 'Informe um nome.');
      return;
    }

    if (!imagem) {
      Alert.alert('Sem imagem selecionada', 'Selecione uma imagem.');
      return;
    }

    Alert.alert(
      'Foto Cadastrada',
      'Sua Foto foi cadastrada com sucesso.'
    );
    cadastrarPerfil();
  };

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
              <Text style={styles.anotherTitle}>Você</Text>
              <View style={styles.anotherLine} />
            </View>
          </View>

          <View style={styles.anotherContentContainer}>
            <View style={styles.entrada}>
              <Image style={styles.icon} source={require('../../assets/iconNome.png')} />
              <TextInput
                style={styles.inputText}
                placeholder="Nome"
                keyboardType="default"
                onChangeText={onChangeNome}
                value={nomePessoa}
              />
            </View>
            <View style={styles.anotherLine} />
            <TouchableOpacity onPress={() => selecionarImagem()}>
              <Text style={styles.botao}><Image source={require('../../assets/ImageFile.png')} style={{ width: 20, height: 20, paddingLeft: 5 }} />Escolher Arquivos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={AlertaConfirma}>
              <Text style={styles.botaoCadastrar}>Cadastrar Novo Rosto</Text>
            </TouchableOpacity>
          </View>

          <Modal
            visible={showConfirmation}
            transparent={true}
            animationType="fade"
          >
            <View style={styles.modal}>
              <View style={styles.containerModal}>
                {imagem && <Image source={{ uri: imagem }} style={styles.imagemModal} />}
                <Text style={styles.textoModal}>Deseja usar a foto escolhida?</Text>
                <View style={styles.botaoContainer}>
                  <TouchableOpacity onPress={handleConfirmation} style={styles.botaoModal}>
                    <Text style={styles.textoBotao}>Sim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCancel} style={styles.botaoModal}>
                    <Text style={styles.textoBotao}>Não</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CadastrarRosto;
