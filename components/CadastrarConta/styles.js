import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    b: {
        height: '100%',
        backgroundColor: '#413C45',
    },
    scroll: {
        width: '100%'
    },
    containerCenter: {
        margin: 'auto',
        alignItems: 'center',
    },
    titleApp: {
        fontSize: 55,
        textAlign: 'center',
        color: '#F2F0F4',
        marginTop: 100,
        fontWeight: '800',
    },
    logo: {
        marginTop: 48,
        marginBottom: 62,
        width: 70,
        height: 70,
    },
    formContainer: {
        width: '80%',
        // height:'40%',
        marginBottom: 20,
        backgroundColor: '#F2F0F4',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,

    },
    titleContainer: {
        fontSize: 20,
        color: '#413C45',
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 20,
    },
    icon: {
        bottom: 2,
        position: 'relative',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
    },
    inputText: {
        marginLeft: 8,
        position: 'relative',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 5,
    },
    entrada: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    botao: {
        textAlign: 'center',
        backgroundColor: '#413C45',
        color: '#F2F0F4',
        borderRadius: 10,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 45,
        paddingRight: 45,
        marginTop: 35,
        marginBottom: 5,
    },
    mensagem: {
        fontSize: 10,
    },
    textBold: {
        color: '#0057FF',
        fontSize: 9,
    },
})

export default styles