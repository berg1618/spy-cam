import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#413C45',
      },
      main: {
        alignItems: 'center'
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        position: 'relative',
      },
      title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
      },
      menuIcon: {
        position: 'absolute',
        left: 140,
        fontSize: 40,
      },
      menuContainer: {
        position: 'absolute',
        top: 120,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
      },
      menuItem: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
      },
      newTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
      },
      anotherTitle: {
        color: '#413C45',
        fontSize: 16,
        textAlign: 'center',
      },
      line: {
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        marginHorizontal: 60,
        marginVertical: -20,
      },
      anotherLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#413C45',
        marginHorizontal: 20,
        marginVertical: 0,
      },
      contentContainer: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        paddingHorizontal: 30,
        margin: 135,
        marginVertical: 250,
        flex: 1,
        zIndex: -1,
        elevation: -1,
      },
      circleButton: {
        position: 'absolute',
        // bottom: 20,
        top: 660,
        right: 20,
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#413C45',
        backgroundColor: '#FFFFFF',
      },
      anotherContentContainer: {
        backgroundColor: '#FFFFFF',
        position: 'relative', // tentar alinhar sino
        borderRadius: 10,
        margin: 40,
        marginVertical: 200,
        padding: 30,
        top: 60,
        flex: 1,
        zIndex: -1,
        elevation: -1
      },
      entrada: {
        flexDirection: 'row',
        marginBottom: -12,
        marginTop: 10,
        margin: 20,
      },
      icon: {
        left: 10,
        bottom: 10,
        width: 25,
        height: 25,
        position: 'relative',
    },
    inputText: {
        marginLeft: 15,
        bottom: 10,
        position: 'relative',
    },
    botao: {
        textAlign: 'center',
        backgroundColor: '#413C45',
        color: '#F2F0F4',
        fontWeight: 'bold',
        borderRadius: 25,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 45,
        paddingRight: 45,
        marginTop: 30,
        margin: 10,
        marginBottom: 5,
    },
    botaoCadastrar: {
        textAlign: 'center',
        backgroundColor: '#413C45',
        color: '#F2F0F4',
        fontWeight: 'bold',
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 45,
        margin: 30,
        marginBottom: 5,
    },
    containerImagem: {
      //ajustando aqui só pra configurar um lugar pra aparecer na tela na hora da apresentação, não significa que vai aparecer nesse canto
      position: 'absolute',
      bottom: 333,
      left: 130,
      alignItems: 'center',
    },
    listImages: {
      marginLeft: 20,
      marginTop: -100
    }
});

export default styles;