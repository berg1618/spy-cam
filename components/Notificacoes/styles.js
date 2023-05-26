import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#413C45'
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 35,
    },
    botao: {
      backgroundColor: '#F2F0F4',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
    },
    mainnotificacao:{
        zIndex: -1,
        justifyContent: 'space-between',
    },
    titleApp: {
        textAlign: 'center',
        color: '#F2F0F4',
        fontSize: 28,
        margin: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#F2F0F4',
    },
    imgNotificacao: {
        width: 100,
        height: 100,
    },
    textItem: {
        alignSelf: 'auto',
        marginTop: 30,
        textAlign: 'center',
        marginLeft: 20,
    }
  });

export default styles