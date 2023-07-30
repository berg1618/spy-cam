import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { listarPessoas, apagarPerfilBanco } from "../../api.js";
import { URL } from "@env";

const utl_api = URL

const PerfilFlatlist = () => {
  const [pessoa, setPessoa] = useState([]);


  useEffect(() => {
    getPessoa();
  }, []);

  const getPessoa = async () => {
    try {
      const response = await listarPessoas();

      const pessoasSemPontoVirgula = response.dados.map((pessoa) => {
        const fotosSemPontoVirgula = pessoa.fotos.endsWith(";")
          ? pessoa.fotos.slice(0, -1).split("\\")[2]
          : pessoa.fotos.split("\\")[2];
        return {
          ...pessoa,
          fotos: fotosSemPontoVirgula,
        };
      });

      setPessoa({ dados: pessoasSemPontoVirgula });
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };
 
  const Pessoa = ({ item }) => {
   console.log(`${URL}/${item.fotos}`);
    const handleDelete = () => {
      Alert.alert(
        "Confirmar",
        "Tem certeza que deseja deletar esta pessoa?",
        [
          {
            text: "Não",
            style: "cancel",
          },
          {
            text: "Sim",
            style: "destructive",
            onPress: async () => {
              try {
                await apagarPerfilBanco(item.id);
                getPessoa();
              } catch (error) {
                console.error("Erro ao deletar pessoa:", error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    };

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.botaoDeletar}
          onPress={handleDelete}
        >
          <Ionicons name="close-circle" size={16} color="#413C45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerImagem}>
          <Image
            source={{ uri: `${utl_api}/${item.fotos}` }}
            style={styles.imagem}
            onError={() => console.log('Erro ao carregar a imagem')}
          />
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
    marginBottom: 50
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