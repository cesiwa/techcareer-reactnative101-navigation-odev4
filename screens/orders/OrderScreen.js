import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "../../components/Card";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const OrderScreen = ({ navigation }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/orders").then((res) => {
      setOrder(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={order}
        renderItem={({ item }) => (
          <CardComponent
            item={item}
            onPress={() => navigation.navigate("OrderDetails", { item: item })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default OrderScreen;
