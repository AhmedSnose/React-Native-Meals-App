import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
export default () => {
  const ids = useSelector((state) => state.favoritesMeals.ids);
  const items = MEALS.filter((item) => ids.includes(item.id));
  if (items.length <= 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}>There is no favorites yet</Text>
      </View>
    );
  }
  return <MealsList items={items} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    flex:1
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 'auto',
    textAlign: "center",
    color: "black",
  },
});
