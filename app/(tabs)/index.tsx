import Input from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import { StyleSheet, View } from "react-native";

const TabsLayout = () => {
  return (
    <View style={styles.container}>
      <Input />
      <ItemsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#110c53" },
});

export default TabsLayout;
