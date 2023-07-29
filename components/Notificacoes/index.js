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

const moment = require('moment');

const Item = ({item}) => (
    <TouchableOpacity style={styles.botao}>
       <Image style={styles.imgNotificacao}
        source={require('../../assets/iconrosto.png')}
      />
      <Text style={styles.textItem}>{item.title}</Text>
    </TouchableOpacity>
  );

const Notificacoes = () => {
    const navigation = useNavigation();

    const [selectedId, setSelectedId] = useState();
    const [dados, setDados] = useState(null);
    const [dadosData, setDadosData] = useState([]);


  
    useEffect(() => {
      const list = async () => {

        const a = await listarNotificacoes()

        a.data.forEach((i) => {
          let dataAmericana = i.createdAt
          let dataBrasileira = moment(dataAmericana).format('DD/MM HH:mm:ss');
          i.createdAt = dataBrasileira
        })
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