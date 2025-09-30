import Inputs from "@/components/Inputs";
import { addExpence, ExpenceType } from "@/store/expences";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

const AddExpence = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const addExpenceHendler = (data: ExpenceType) => {
    dispatch(addExpence(data));
    router.push("/");
  };
  return (
    <View style={styles.container}>
      <Inputs sendAction={(data) => addExpenceHendler(data)} />
    </View>
  );
};

export default AddExpence;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#110c53" },
});
