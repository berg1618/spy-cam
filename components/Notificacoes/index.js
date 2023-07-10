import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';

import { listarNotificacoes } from '../../api';

import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import styles from "./styles";



//vai rederizar um item
const Item = ({item}) => (
    <TouchableOpacity style={styles.botao}>
       <Image style={styles.imgNotificacao}
        source={require('../../assets/iconrosto.png')}
      />
      <Text style={styles.textItem}>{item.mensagem}</Text>
      {/* <Text style={styles.textItem}>{item.createdAt}</Text> */}
    </TouchableOpacity>
  );

//parte principal
const Notificacoes = () => {
    const navigation = useNavigation();

    const [selectedId, setSelectedId] = useState();
    const [dados, setDados] = useState(null);

  
    useEffect(() => {
      const list = async () => {
        const a = await listarNotificacoes()
        setDados(a.data)
      }
      list()
      
    }, [])


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
          <ScrollView>
            <View>
              <Header/>
              <View style={styles.mainnotificacao}>
              <Text style={styles.titleApp}>Notificações</Text>
                  <FlatList
                  data={dados}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  extraData={selectedId}
              />
              </View>
            </View>
            </ScrollView>
        </SafeAreaView> 
      );
}



export default Notificacoes