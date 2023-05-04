import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
// import styles from "./styles";

const Notificacoes = () => {
    const navigation = useNavigation();
     return (
        <View style={{alignItems: "center"}}>
            <Text>Pagina de notificacoes</Text>
        </View>
     )
}

export default Notificacoes