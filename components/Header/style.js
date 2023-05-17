import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    header : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#413C45',
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        position: 'relative'
    },
    title :{
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
        menuItem: {
            fontSize: 18,
            color: '#000',
            marginBottom: 10,
        },
        menuContainer: {
            position: 'absolute',
            top: 120,
            right: 0,
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
          },
        
})

export default styles