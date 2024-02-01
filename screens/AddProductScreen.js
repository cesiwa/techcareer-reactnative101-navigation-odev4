import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import axios from "axios";
import { useState } from "react";

const baseUrl = "https://northwind.vercel.app/api/suppliers";

const AddProductScreen = () => {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitInStock, setUnitInStock] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");

  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const onChangeUnitPriceHandler = (unitPrice) => {
    setUnitPrice(unitPrice);
  };
  const onChangeUnitInStockHandler = (unitInStock) => {
    setUnitInStock(unitInStock);
  };
  const onChangeQuantityPerUnitHandler = (quantityPerUnit) => {
    setQuantityPerUnit(quantityPerUnit);
  };

  const onSubmitFormHandler = async (event) => {
    try {
      const response = await axios.post(`${baseUrl}`, {
        name,
        unitPrice,
        unitInStock,
        quantityPerUnit,
      });
      Alert.alert("Product Added");
    } catch (error) {
      alert("An error has occurred");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.margin}>
        <Text>Name</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeNameHandler}
        />
      </View>
      <View style={styles.margin}>
        <Text>Unit Price</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeUnitPriceHandler}
        />
      </View>
      <View style={styles.margin}>
        <Text>Unit In Stock</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeUnitInStockHandler}
        />
      </View>
      <View style={styles.margin}>
        <Text>Quantity Per Unit</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeQuantityPerUnitHandler}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmitFormHandler}>
        <Text style={{ color: "beige" }}>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "5%",
  },
  margin: {
    marginBottom: 20,
  },
  textinput: {
    backgroundColor: "beige",
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginTop: 30,
  },
});
export default AddProductScreen;
