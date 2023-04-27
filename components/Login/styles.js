import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    b:{
        height: '100%',
        backgroundColor: '#413C45',
        margin: 'auto',
        alignItems:'center',
    },
    titleApp: {
        fontSize: 55,
        textAlign: 'center',
        color:'#F2F0F4',
        marginTop:100,
        fontWeight:'800',
    },
    logo:{
        marginTop:48,
        marginBottom:62,
        width: 70,
        height:70,
    },
    formContainer: {
        width:'80%',
        backgroundColor:'#F2F0F4',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        padding:15,

    },
    titleContainer:{
        fontSize:20,
        color:'#413C45',
        fontWeight:'500',
        marginTop: 10,
        marginBottom: 20,
    },
    icon: {
        left: 2,
        top: 5,
        position: 'relative',
    },
    inputText: {
        marginLeft: 8,
        position:'relative',
        width: 150,
    },
    entrada: {
        flexDirection:'row',
        marginBottom: -12,
        marginTop: 10,
    },
    botao: {
        textAlign:'center',
        backgroundColor:'#413C45',
        color:'#F2F0F4',
        borderRadius: 10,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 45,
        paddingRight: 45,
        marginTop:45,
        marginBottom: 5,
    },
    mensagem: {
        fontSize: 10,
    },
    textBold:{
        color:'#0057FF',
        fontSize: 9,
    },
})

export default styles