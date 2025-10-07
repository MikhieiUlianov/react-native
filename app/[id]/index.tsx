import Button from "@/components/Button";
import ErrorOverlay from "@/components/ErrorOverlay";
import Inputs from "@/components/Inputs";
import LoadingOverlay from "@/components/LoadingOverlay";
import { ExpenceType, removeExpence, updateExpence } from "@/store/expences";
import {
  deleteExpence as httpDeleteExpence,
  updateExpence as httpUpdateExpence,
} from "@/util/http";
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
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState<boolean | string>(false);

  const handleUpdate = async (data: ExpenceType) => {
    setIsFetching(true);
    try {
      dispatch(updateExpence(data));
      await httpUpdateExpence(normalizedId, data);
      router.push("/");
    } catch (err) {
      setIsError("Could not save data!");
      setIsFetching(false);
    }
  };

  const handleDelete = () => {
    setIsFetching(true);
    try {
      dispatch(removeExpence(normalizedId));
      httpDeleteExpence(normalizedId);
      router.back();
    } catch (err) {
      setIsError("Could not save data!");
      setIsFetching(false);
    }
  };

  if (isFetching) return <LoadingOverlay />;
  if (isError) <ErrorOverlay message={isError as string} />;

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
          <Button onPress={handleDelete}>
            <Ionicons name="trash" color={"red"} size={35} />
          </Button>
        </View>
      )}
      {isFormOpen && (
        <>
          <Inputs
            sendAction={(data) => handleUpdate(data)}
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
