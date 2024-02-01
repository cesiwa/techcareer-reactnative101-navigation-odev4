import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import dayjs from "dayjs";

const OrderDetailScreen = ({ route }) => {
  const { item } = route.params;

  var orderDate = dayjs(item.orderDate).format("DD MMMM dddd YYYY");
  var requiredDate = dayjs(item.requiredDate).format("DD MMMM dddd YYYY");
  var shippedDate = dayjs(item.shippedDate).format("DD MMMM dddd YYYY");

  return (
    <SafeAreaView>
      <Card
        key={item.id}
        style={{
          paddingBottom: 10,
          backgroundColor: "beige",
          position: "relative",
        }}
      >
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <View
          style={{
            padding: 10,
            position: "absolute",
            backgroundColor: "beige",
            left: 10,
            top: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "600" }}>{item.id}.</Text>
        </View>
        <Card.Title title={item.customerId} subtitle={item.shipName} />
        <Card.Content>
          <Text>Order Date: {orderDate}</Text>
          <Text>Required Date: {requiredDate}</Text>
          <Text>Shipped Date: {shippedDate}</Text>
          <Text>Shipped Via: {item.shipVia}</Text>
          <Text style={{ marginBottom: 30 }}>Freight: {item.freight}</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
