import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const hmst = ({ navigation }) => {
  const [data, setData] = useState([{ id: "1", text: "Item 1" }, { id: "2", text: "Item 2" }]);

  const renderItem = ({ item }) => {
    const handleDeleteItem = (itemId) => {
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);
    };

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.id)}>
          <Ionicons name="close-circle" size={16} color="#413C45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require('../../assets/iconrosto.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.anotherTitle}>{item.text}</Text>
        <View style={styles.anotherLine} />
      </View>
    );
  };

  const handleAddItem = () => {
    const newItem = { id: Date.now().toString(), text: `Item ${data.length + 1}` };
    setData([...data, newItem]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text
                onPress={() => {
                navigation.navigate("CadastrarRosto")
              }}
              style={styles.mensagem}>
                <Text>Go</Text>
              </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  anotherTitle: {
    color: "#413C45",
    fontSize: 16,
    textAlign: "center",
  },
  anotherLine: {
    borderBottomWidth: 2,
    borderBottomColor: "#413C45",
    marginHorizontal: 115,
    marginVertical: 8,
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default hmst;
