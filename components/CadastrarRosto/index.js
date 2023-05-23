import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Header from '../Header';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

const CadastrarRosto = () => {

  const [fotoGaleria, setFotoGaleria] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const abrirGaleria = async () => {
    const result = await launchImageLibrary(options);
    setFotoGaleria(result.assets[0].uri);
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity onPress={abrirGaleria}>
          <Text style={styles.textoBotao}>Abrir Galeria</Text>
        </TouchableOpacity>
        <Image style={styles.imageStyle} source={{ uri: fotoGaleria }} />
      </View>
    </View>

  );
};

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
    textAlign: 'center'
  },
});

export default CadastrarRosto;