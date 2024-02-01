import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import dayjs from "dayjs";

const CardComponent = ({ item, onPress }) => {
  var dateSample = dayjs(item.orderDate).format("DD MMMM dddd HH");
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        key={item.id}
        style={{
          paddingBottom: 10,
          backgroundColor: "beige",
          marginBottom: 20,
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
          <Text>{dateSample}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default CardComponent;
