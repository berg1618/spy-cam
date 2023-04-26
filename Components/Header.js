import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
      <Text style={styles.title}>Spy Cam</Text>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="menu" size={32} color="#FFFFFF" style={styles.menuIcon} />
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
  }

};


export default Header;