import { StyleSheet, Text, View } from "react-native";

const Input = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.date}>Last 7 days</Text>
      <Text style={styles.total}>10$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#dcd2f9",
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: { color: "#3b3a3e", fontSize: 12 },
  total: {
    fontWeight: "800",
    color: "#190b46",
    fontSize: 18,
  },
});

export default Input;
