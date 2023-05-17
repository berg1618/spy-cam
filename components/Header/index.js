import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";












const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    // const [animation] = useState(new Animated.Value(0));
    const animation = useRef(new Animated.Value(0)).current;
  
    const toggleMenu = ({navigation}) => {
      setMenuVisible(!menuVisible);
      // console.log(menuVisible)
      Animated.timing(animation, {
        toValue: menuVisible ? 0 : 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  
    const containerStyle = {
      ...styles.menuContainer,
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0],
          }),
        },
      ],
    };
  
  
    // habilitar a navegação por paginas
    const navigation = useNavigation();
  
  
    return (
  
      <View style={styles.header}>
        <Text style={styles.title}>Spy Cam</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={32} color="#FFFFFF" style={styles.menuIcon} />
        </TouchableOpacity>
        <Animated.View style={containerStyle}>
          <Text
          onPress={() => {
            navigation.navigate("pageInicial")
          }}
          style={styles.menuItem}>Pagina inicial</Text>
          <Text
          onPress={() => {
            navigation.navigate("notificacoes")
          }}
          style={styles.menuItem}>Notificacoes</Text>
          <Text style={styles.menuItem}>Exemplo 3</Text>
          <Text style={styles.menuItem}>Exemplo 4</Text>
        </Animated.View>
      </View>
    );
  };
  