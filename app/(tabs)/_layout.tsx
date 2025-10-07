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
