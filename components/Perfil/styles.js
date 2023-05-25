import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#413C45',
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
        borderBottomColor: '#fff',
        marginHorizontal: 100,
        marginVertical: -20,
      },
      anotherLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#413C45',
        marginHorizontal: 115,
        marginVertical: 0,
      },
      contentContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 40,
        marginVertical: 60,
        flex: 1,
        zIndex: -1,
        elevation: -1
      },
      circleButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#413C45',
        backgroundColor: '#FFFFFF',
      }
});

export default styles;