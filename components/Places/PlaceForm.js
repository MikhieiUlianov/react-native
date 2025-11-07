import { useCallback, useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constans/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImage(imageUri) {
    setSelectedImage(imageUri);
  }
  const pickLocation = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlace() {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onPickImage={takeImage} />
      <LocationPicker onPickLocation={pickLocation} />
      <Button onPress={savePlace}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary800,
    borderBottomWidth: 2,
  },
});
