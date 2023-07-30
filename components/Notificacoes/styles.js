import { StyleSheet } from 'react-native';

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
    alignItems: 'center',
  },
  mainnotificacao: {
    zIndex: -1,
    justifyContent: 'space-between',
  },
  titleApp: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F2F0F4',
    fontSize: 30,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#F2F0F4',
  },
  imgNotificacao: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  textItem: {
    marginVertical: 10,
    textAlign: 'left',
  },
  dataNotificacao: {
    marginVertical: 10,
    textAlign: 'right',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  mensagemNotificacao: {
    marginVertical: 10,
    textAlign: 'left',
    marginLeft: 20,
  },
});

export default styles