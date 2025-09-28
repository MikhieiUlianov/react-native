import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { useDispatch, useSelector } from "react-redux";

const MealDetailsScreen = ({ route, navigation }) => {
  /* const favoriteMealsCtx = useContext(FavoritesContext); */

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  /*  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId); */
  const mealIsFavorite = useSelector((state) =>
    state.favorites.ids.includes(mealId)
  );
  const dispatch = useDispatch();

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId));
      /*  favoriteMealsCtx.removeFavorite(mealId); */
    } else {
      dispatch(addFavorite(mealId));

      /*  favoriteMealsCtx.addFavorite(mealId); */
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
