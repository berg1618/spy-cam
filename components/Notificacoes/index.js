import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import styles from "./styles";



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
      id: '58694a0f-3da1-471f-bd96-1ergewgwergeg',
      title: 'day entrou no carrro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-wgrreg8wegh34',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-1gk84w9g43g',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd9wgejqw8g34hg4g',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd9dwqq3hq3dq3d',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-1d q2D382ORHF23BF',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-RED2339ODH3DHD',
      title: 'claudio robou o carro',
    },
    { 
      
      id: '58694a0f-3da1-471f-bd96-1D12 923FD3D',
      title: 'claudio robou o carro',
    },
    
  ];


//vai rederizar um item
const Item = ({item}) => (
    <TouchableOpacity style={styles.botao}>
       <Image style={styles.imgNotificacao}
        source={require('../../assets/iconrosto.png')}
      />
      <Text style={styles.textItem}>{item.title}</Text>
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
            <Header/>
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



export default Notificacoes