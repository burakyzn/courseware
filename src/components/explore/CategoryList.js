import { StyleSheet, FlatList, View, Text } from "react-native";
import CategoryButton from "../core/CategoryButton";
import responsiveFonts from "utils/ResponsiveFonts";
import React from "react";

const CategoryList = (props) => {
  const { header, data, style } = props;

  return (
    <View style={style}>
      {header ? <Text style={styles.header}>Browser Category</Text> : null}
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
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categories: {
    marginTop: "2%",
  },
  header: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
});
