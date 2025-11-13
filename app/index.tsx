import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
export default function HomeScreen() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {},
    });
  }

  <View style={styles.container}>
    <Button
      title="Schedule Notification"
      onPress={scheduleNotificationHandler}
    />
    <StatusBar style="auto" />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
