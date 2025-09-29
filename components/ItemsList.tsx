import { FlatList } from "react-native";
import ListItem from "./ListItem";

const ItemsList = () => {
  return (
    <FlatList
      data={[{ id: "d1" }]}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ListItem title="book" price={10} date={"2025-10-10"} id="l1" />
      )}
    />
  );
};

export default ItemsList;
