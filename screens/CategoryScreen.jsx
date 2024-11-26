import { FlatList, Platform, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/UI/CategoryGridTile";

export default ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={() => navigation.navigate("MealsOverviewScreen" , {
          categoryId: item.id
        })}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
