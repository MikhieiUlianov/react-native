import MealsList from "../components/MealsList/MealsList";
/* import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context"; */
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  /* const favoriteMealsCtx = useContext(FavoritesContext); */
  const favoriteMealsIds = useSelector((state) => state.favorites.ids);

  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === favoriteMealsIds.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};

if (favoriteMeals.length === 0)
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );

export default FavoritesScreen;
