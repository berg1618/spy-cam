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
      width: "95%",
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
    textContainer: {
      width: "70%",
    },
    textItem: {
        margin: 10,
        textAlign: 'left',
        marginLeft: 20,
    },
    dataNotificacao: {
      margin: 10,
      textAlign: 'right',
      fontSize: 13,
      fontStyle: 'italic',
      fontWeight: '500'
    }
  });

export default styles