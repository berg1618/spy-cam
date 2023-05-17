import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
// import styles from "./styles";



//array que ta simulando o back
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'ale entrou no carro',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'berg entrou no carro',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'lucas entrou no carrro',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'day entrou no carrro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'claudio robou o carro',
    },
  ];


//vai rederizar um item
const Item = ({item}) => (
    <TouchableOpacity style={styles.botao}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

//parte principal
const Notificacoes = () => {
    const navigation = useNavigation();

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
           />
        );
      };

      //conteudo da tela de notificacao
      return (
       
        <SafeAreaView style={styles.container}>
            <View style={styles.mainnotificacao}>
            <Text style={styles.titleApp}>Notificações</Text>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
            </View>
         
        </SafeAreaView>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    botao: {
      backgroundColor: '#eee',
      margin: 10,
      padding: 10
    },
    mainnotificacao:{}
  });
export default Notificacoes