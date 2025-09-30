import ItemsList from "@/components/ItemsList";
import { RootState } from "@/store/store";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const AllExpences = () => {
  const allExpences = useSelector((state: RootState) => state.expences);

  if (allExpences.length < 1)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>There Is No Expences</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ItemsList items={allExpences} />
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

export default AllExpences;
