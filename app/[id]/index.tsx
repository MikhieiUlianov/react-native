import Button from "@/components/Button";
import Inputs from "@/components/Inputs";
import { ExpenceType, removeExpence, updateItem } from "@/store/expences";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const ExpenceScreen = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const normalizedId = Array.isArray(id) ? id[0] : id ?? "";
  const [isFormOpen, setIsFormOpen] = useState(false);

  const updateItemHandler = (data: ExpenceType) => {
    dispatch(updateItem(data));
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => setIsFormOpen(false)}>
          <Text style={styles.cancel}>Cancel</Text>
        </Button>
        <Button onPress={() => setIsFormOpen(true)}>
          <Text style={styles.update}>Update</Text>
        </Button>
      </View>
      {!isFormOpen && (
        <View style={styles.remove}>
          <Button onPress={() => dispatch(removeExpence(normalizedId))}>
            <Ionicons name="trash" color={"red"} size={35} />
          </Button>
        </View>
      )}
      {isFormOpen && (
        <>
          <Inputs
            sendAction={(data) => updateItemHandler(data)}
            itemId={normalizedId}
          />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#110c53" },

  cancel: {
    color: "#9591e8",
    fontWeight: "800",
    fontSize: 18,
  },
  update: {
    padding: 15,
    fontSize: 18,
    color: "#1c0e4f",
    backgroundColor: "#9591e8",
    fontWeight: "800",
    borderRadius: 10,
  },
  remove: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
});
export default ExpenceScreen;
