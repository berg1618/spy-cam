import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#726E6E"
  },
  titleApp: {
    fontSize: 40,
    color: '#F2F0F4',
    fontWeight: '800',
    // marginLeft: 20
  },
  Modal: {
    position: "relative",
    left: 60,
    top: 4,
    width: 33,
    height: 29
  },
  header: {
    marginTop: 15,
    height: 87,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    justifyContent: "center"
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

  iconNotifications: {
    width: 75,
    height: 75,
    position: "relative",
    left: 276,
    top: 80
  }
});





export default styles;
