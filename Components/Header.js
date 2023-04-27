import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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

  return (

    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>  Spy Cam</Text>
      </View>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="menu" size={32} color="#FFFFFF" />
      </TouchableOpacity>
      <Animated.View style={containerStyle}>
        <Text style={styles.menuItem}>Exemplo 1</Text>
        <Text style={styles.menuItem}>Exemplo 2</Text>
        <Text style={styles.menuItem}>Exemplo 3</Text>
        <Text style={styles.menuItem}>Exemplo 4</Text>
      </Animated.View>
    </View>
  );
};

const styles = {
  header: {
    height: 120,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  menuContainer: {
    position: 'absolute',
    top: 120,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  menuItem: {
    color: '#000',
    marginBottom: 10,
  }

};


export default Header;