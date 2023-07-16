import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { listarPessoas } from "../../api.js";

const PerfilFlatlist = () => {
  const [pessoa, setPessoa] = useState([]);

  useEffect(() => {
    getPessoa();
  }, []);

  const getPessoa = async () => {
    try {
      const response = await listarPessoas();
      setPessoa(response);
    } catch (error) {
      throw error;
    }
  };

  const Pessoa = ({ item }) => {
  
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.botaoDeletar}>
          <Ionicons name="close-circle" size={16} color="#413C45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerImagem}>
          <Image source={require('../../assets/iconrosto.png')} style={styles.imagem} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.containerTitulo} horizontal>
          <Text style={styles.titulo}>{item.nome_pessoa}</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pessoa.dados}
        renderItem={Pessoa}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  itemContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
  },
  containerImagem: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 80,
    height: 80,
  },
  containerTitulo: {
    flexGrow: 1,
    justifyContent: "center",
  },
  titulo: {
    color: "#413C45",
    borderBottomWidth: 2,
    paddingHorizontal: 5,
    fontSize: 16,
    textAlign: "center",
  },
  botaoDeletar: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  mensagem: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "#007AFF",
  },
});

export default PerfilFlatlist;
