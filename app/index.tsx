import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function HomeScreen() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first notification!",
        body: "Notification body",
        data: { userName: "Name" },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
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
