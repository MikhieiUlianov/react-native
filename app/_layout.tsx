import store from "@/store/store";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#080678" },
          headerTitle: "Recent Express",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerRight: () => <Ionicons name="add" size={30} color="white" />,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
