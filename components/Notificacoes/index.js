import React, { useState, useEffect } from 'react';
import { FlatList, Modal, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { listarNotificacoes } from '../../api';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const formatDateTime = (dateTime) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Intl.DateTimeFormat('pt-BR', options).format(dateTime);
  return date;
};

const formatTime = (dateTime) => {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = new Intl.DateTimeFormat('pt-BR', options).format(dateTime);
  return time;
};

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.botao} onPress={() => onPress(item)}>
    <Image style={styles.imgNotificacao} source={require('../../assets/iconrosto.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.notificationText}>{`${item.mensagem}, dia ${formatDateTime(item.createdAt)}, às ${formatTime(item.createdAt)}.`}</Text>
    </View>
  </TouchableOpacity>
);

const PlaceholderImage = () => (
  <View style={styles.placeholderContainer}>
    <Image style={styles.placeholderImage} source={require('../../assets/iconrosto.png')} />
  </View>
);

const Notificacoes = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [dados, setDados] = useState(null);
  const [dadosData, setDadosData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const list = async () => {
      const a = await listarNotificacoes();
      a.data.forEach((i) => {
        let dataBrasileira = new Date(Date.parse(i.createdAt));
        i.createdAt = dataBrasileira;
      });
      setDados(a.data);
      console.log(a.data);
    };
    list();
  }, []);

  const handleItemClick = (item) => {
    if (item.pessoa_id === null) {
      setSelectedId(item.id);
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainnotificacao}>
        <Text style={styles.titleApp}>Notificações</Text>
        <FlatList
          data={dados}
          renderItem={({ item }) => <Item item={item} onPress={handleItemClick} />}
          keyExtractor={(item) => item.id.toString()}
          extraData={selectedId}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
              <TouchableOpacity style={{ position: 'absolute', top: 8, right: 8 }} onPress={() => setModalVisible(false)}>
                <Ionicons name="close-circle" size={20} color="#413C45" />
              </TouchableOpacity>
              {selectedId && (
                <>
                  <Text style={{ textAlign: 'center' }}>{`${dados.find((item) => item.id === selectedId).mensagem}`}</Text>
                  <Text style={{ textAlign: 'center' }}>{`dia ${formatDateTime(dados.find((item) => item.id === selectedId).createdAt)}, às ${formatTime(dados.find((item) => item.id === selectedId).createdAt)}.`}</Text>
                </>
              )}
              <PlaceholderImage />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Notificacoes;