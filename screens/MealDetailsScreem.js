import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
const MealDetailsScreem = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Button Pressed");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            Press={headerButtonPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <View>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      ></Image>
      <Text style={styles.tilte}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.detailContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingridient) => (
              <Text style={styles.list} key={ingridient}>
                {ingridient}
              </Text>
            ))}
            <Text style={styles.subtitle}>Steps</Text>
            {selectedMeal.steps.map((step) => (
              <Text style={styles.list} key={step}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreem;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailContainer: {
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 250,
  },
  tilte: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
  },
  subtitle: {
    color: "#9ED2C6",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 4,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#9ED2C6",
  },
  scrollView: {
    marginBottom: 10,
    height: "55%",
  },
  list: {
    backgroundColor: "#9ED2C6",
    margin: 4,
    padding: 4,
    borderRadius: 8,
    textAlign: "center",
    elevation: 2,
  },
});
