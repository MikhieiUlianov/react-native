import { ExpenceType } from "@/store/expences";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const ItemsList = ({ items }: { items: ExpenceType[] }) => {
  return (
    <FlatList
      style={styles.itemsList}
      data={items}
      keyExtractor={(item) => item.id as string}
      renderItem={(itemData) => (
        <ListItem
          title={itemData.item.title}
          price={itemData.item.price}
          date={itemData.item.date as string}
          id={itemData.item.id as string}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemsList: {
    marginVertical: 20,
  },
});

export default ItemsList;
