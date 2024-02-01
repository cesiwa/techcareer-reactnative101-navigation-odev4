import { SafeAreaView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SupplierScreen = () => {
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setSupplier(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={supplier}
        renderItem={({ item }) => (
          <Text
            style={{ color: item.address.country === "USA" ? "red" : "black" }}
          >
            {item.companyName} - {item.address.country}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SupplierScreen;
