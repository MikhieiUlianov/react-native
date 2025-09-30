// app/(tabs)/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#080678" },
        tabBarActiveTintColor: "#dfbe00",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Most Recent",
          title: "Most Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllExpences"
        options={{
          headerTitle: "All Expence",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
/* // app/(tabs)/_layout.tsx
import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#080678" },
        tabBarActiveTintColor: "#dfbe00",
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
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Most Recent",
          title: "Most Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllExpences"
        options={{
          headerTitle: "All Expence",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
 */
