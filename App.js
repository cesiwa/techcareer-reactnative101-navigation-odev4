import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OrderScreen from "./screens/orders/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDetailScreen from "./screens/orders/OrderDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ title: "Order Screen" }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailScreen}
          options={{ title: "Order" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
