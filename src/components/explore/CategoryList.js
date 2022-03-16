import { StyleSheet, FlatList } from "react-native";
import CategoryButton from "../core/CategoryButton";
import React from "react";

const CategoryList = (props) => {
  const { data } = props;

  return (
    <FlatList
      style={styles.categories}
      data={data}
      renderItem={({ item }) => {
        return <CategoryButton text={item.name} />;
      }}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categories: {
    marginTop: "2%",
  },
});
