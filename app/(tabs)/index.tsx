import ErrorOverlay from "@/components/ErrorOverlay";
import Header from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import LoadingOverlay from "@/components/LoadingOverlay";
import { setExpences } from "@/store/expences";
import { RootState } from "@/store/store";
import { fetchExpences } from "@/util/http";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const RecentExpences = () => {
  const allExpences = useSelector((state: RootState) => state.expences);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<boolean | string>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getExpences = async () => {
      setIsFetching(true);
      try {
        const data = await fetchExpences();
        dispatch(setExpences(data));
      } catch (err) {
        setIsError("Could not fetch expences!");
      } finally {
        setIsFetching(false);
      }
    };
    getExpences();
  }, []);

  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const filteredItems = allExpences.filter((e) => {
    const expenceDate = new Date(e.date as string);
    return expenceDate >= sevenDaysAgo && expenceDate <= now;
  });
  const totalPrice = filteredItems.reduce((acc, i) => acc + i.price, 0);

  if (isFetching) return <LoadingOverlay />;
  if (isError) <ErrorOverlay message={isError as string} />;

  return (
    <View style={styles.container}>
      <Header totalPrice={totalPrice} />
      {allExpences.length < 1 && (
        <Text style={styles.text}>There Is No Expences</Text>
      )}
      {allExpences.length !== 0 && <ItemsList items={filteredItems} />}
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

export default RecentExpences;
