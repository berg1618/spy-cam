import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import Header from '../Header';
import CustomizedBar from '../CustomizedBar/CustomizedBar';
import PerfilFlatlist from '../PerfilFlatlist/PerfilFlatlist';

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
            <Image source={require('../../assets/iconrosto.png')} style={{ width: 80, height: 80 }} />
          </TouchableOpacity>
          <Text style={styles.anotherTitle}>Você</Text>
          <View style={styles.anotherLine} />
          <PerfilFlatlist />
        </View>
      </View>

    </View>

  );
};

export default Perfil;