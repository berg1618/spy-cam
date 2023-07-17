import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    backgroundColor: '#413C45',
    borderBottomWidth: 2,
    borderBottomColor: '#F2F0F4',
    position: 'relative'
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
  container: {
    flex: 1,
    backgroundColor: "#413C45"
  },
  titleApp: {
    fontSize: 40,
    color: '#F2F0F4',
    fontWeight: '800',
  },
  Modal: {
    position: "relative",
    left: 60,
    top: 4,
    width: 33,
    height: 29
  },
  main: {
    alignItems: "center",
    marginTop: 54,
  },

  imgLogo: {
    width: 60,
    height: 60
  },

  optionsNavgation: {
    backgroundColor: '#F2F0F4',
    borderRadius: 10,
    width: '80%',
    paddingLeft: 40,
    paddingBottom: 45,
    marginTop: 54
  },
  buttonsNavgations: {
    backgroundColor: "#413C45",
    width: '80%',
    height: 34,
    borderRadius: 10,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center"
  },

  textButtonNavigation: {
    color: '#F2F0F4',
    fontSize: 16,
    fontWeight: "700"
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
});





export default styles;
