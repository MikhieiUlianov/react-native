import Header from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import { RootState } from "@/store/store";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const TabsLayout = () => {
  const allExpences = useSelector((state: RootState) => state.expences);

  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const filteredItems = allExpences.filter((e) => {
    const expenceDate = new Date(e.date);
    return expenceDate >= sevenDaysAgo && expenceDate <= now;
  });
  const totalPrice = filteredItems.reduce((acc, i) => acc + i.price, 0);

  return (
    <View style={styles.container}>
      <Header totalPrice={totalPrice} />
      {allExpences.length < 1 && (
        <Text style={styles.text}>There Is No Expences</Text>
      )}
      {allExpences.length !== 0 && <ItemsList items={filteredItems} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#110c53" },
  text: {
    marginVertical: 20,
    fontWeight: "800",
    textAlign: "center",
    color: "#d3cbf3",
    fontSize: 18,
  },
});

export default TabsLayout;
