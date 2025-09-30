import Button from "@/components/Button";
import store from "@/store/store";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

const RootLayout = () => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          /* 
          headerShown: false, */
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#080678" },
          headerTitle: "Recent Express",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerRight: () => (
            <Button onPress={() => router.push("/AddExpence")}>
              <Ionicons name="add" size={30} color="white" />
            </Button>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
    /*  <Provider store={store}>
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
          headerRight: () => (
            <Button onPress={() => router.push("/addExpence")}>
              <Ionicons name="add" size={30} color="white" />,
            </Button>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider> */
  );
};

export default RootLayout;

/* import store from "@/store/store";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

const RootLayout = () => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
         
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
 */
