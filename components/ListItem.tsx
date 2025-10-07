import { ExpenceType } from "@/store/expences";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ListItem = ({ title, date, price, id }: ExpenceType) => {
  const router = useRouter();
  if (!date) return;
  return (
    <Pressable style={styles.listItem} onPress={() => router.push(`/${id}`)}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}$</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#1913d0",
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  title: { color: "#dcd2f9", fontWeight: "800", fontSize: 18 },
  date: { color: "#dcd2f9", fontWeight: "800", fontSize: 14 },
  priceContainer: {
    backgroundColor: "white",
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  price: { fontWeight: "800", fontSize: 20, color: "#190b46" },
});

export default ListItem;
