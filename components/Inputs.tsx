import { ExpenceType } from "@/store/expences";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";

const Inputs = ({
  sendAction,
}: {
  sendAction: (data: ExpenceType) => void;
  itemId?: string;
}) => {
  const [formData, setFormData] = useState({
    price: "0",
    title: "",
    date: new Date().toISOString(),
  });
  return (
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
        <TextInput
          style={styles.input}
          value={formData.price}
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={(price) => setFormData((prev) => ({ ...prev, price }))}
        />
      </View>
      <View style={styles.submitButtonContainer}>
        <Button
          onPress={() =>
            sendAction({
              title: formData.title,
              price: Number(formData.price),
              date: formData.date,
            })
          }
        >
          <Text style={styles.buttonText}>Update</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Inputs;
