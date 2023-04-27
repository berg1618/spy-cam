import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Header from "../Components/Header";
import CustomizedBar from "../Components/CustomizedBar";

const Perfil = () => {
  return (
    <View style={styles.container}>
      <CustomizedBar />
      <Header />
      <TouchableOpacity style={styles.circleButton}>
        <FontAwesomeIcon name='bell' size={40} color='#413C45' style={{ marginTop: 21, marginHorizontal: 24 }} />
      </TouchableOpacity>
      <Text style={styles.newTitle}>Perfil</Text>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
        <View style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, flex: 1 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/iconrosto.png')} style={{ width: 80, height: 80 }} />
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

export default Perfil;
