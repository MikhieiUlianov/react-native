import Button from "@/components/Button";
import { removeExpence, updateItem } from "@/store/expences";
import { RootState } from "@/store/store";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const ExpenceScreen = () => {
  const { id } = useLocalSearchParams();
  const normalizedId = Array.isArray(id) ? id[0] : id ?? "";
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.expences);

  console.log(state);
  const existingItem = state.find((e) => e.id === normalizedId);

  const [formData, setFormData] = useState({
    id: normalizedId,
    price: existingItem?.price.toString() ?? "0",
    title: existingItem?.title ?? "",
    date: existingItem?.date ?? new Date().toISOString(),
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          /* onPress={() => router.push("/")} */ onPress={() =>
            setIsFormOpen(false)
          }
        >
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
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              value={formData.title}
              placeholder="Title"
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, title: text }))
              }
            />
            {/*  <TextInput
              style={styles.input}
              value={formData.price.toString()}
              placeholder="Price"
              onChangeText={(price) =>
                setFormData((prev) => ({ ...prev, price: Number(price) }))
              }
            /> */}
            <TextInput
              style={styles.input}
              value={formData.price}
              placeholder="Price"
              keyboardType="numeric"
              onChangeText={(price) =>
                setFormData((prev) => ({ ...prev, price }))
              }
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <Button
              onPress={() =>
                dispatch(
                  updateItem({
                    ...formData,
                    price: Number(formData.price), // convert here
                  })
                )
              }
            >
              <Text style={styles.buttonText}>Update</Text>
            </Button>
          </View>
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
  inputsContainer: {
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    backgroundColor: "#a9aded",
    color: "#131532",
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    padding: 15,
    fontSize: 18,
    color: "#1c0e4f",
    backgroundColor: "#9591e8",
    fontWeight: "800",
    borderRadius: 10,
  },
  submitButtonContainer: {
    alignItems: "center",
  },
});
export default ExpenceScreen;
