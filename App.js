import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.circleButton}>
        <FontAwesomeIcon name='bell' size={40} color='#413C45' style={{ marginTop: 21, marginHorizontal: 24 }} />
      </TouchableOpacity>
      <Text style={styles.newTitle}>Perfil</Text>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
        <View style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, flex: 1 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/iconrosto.png')} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <Text style={styles.anotherTitle}>Maria</Text>
          <View style={styles.anotherLine} />
        </View>
      </View>

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
  },

};


export default App;