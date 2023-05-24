import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Button } from 'react-native';
import Header from '../Header';
import * as ImagePicker from 'expo-image-picker';


const CadastrarRosto = () => {

  const [permissaoGaleria, setPermissaoGaleria] = useState(null);
  const [ imagem, setImagem ] = useState (null);

  useEffect(()=>{
    (async () => {
      const statusGaleria = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissaoGaleria(statusGaleria.status === 'granted')
    })();
  }, []);

  const selecionarImagem = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality:1,
    });

    if(!result.canceled){
      setImagem(result.assets[0].uri);
    }
  };

  if (permissaoGaleria === false){
    return <Text>Sem Permissão Concedida à Galeria</Text>
  }

  return (
    <View>
      <Header />
      <View style={styles.container}></View>
        <TouchableOpacity onPress={() => selecionarImagem()}>
          <Text style={styles.textoBotao}>Abrir Galeria</Text>
        </TouchableOpacity>
        {imagem && <Image source={{ uri: imagem }} style={{ width: 150, height: 150 }} />}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    backgroundColor: "#413C45",
    color: "#FFFFFF",
    fontSize: 16,
    width: 120,
    height: 30,
    borderRadius: 10,
    marginTop: 30,
    textAlign: 'center',
  },
});

export default CadastrarRosto;
