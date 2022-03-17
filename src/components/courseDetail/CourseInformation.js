import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import COLORS from "constants/Colors";
import responsiveFonts from "utils/ResponsiveFonts";
import CategoryButton from "../core/CategoryButton";

const CourseInformation = (props) => {
  const { data, title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <CategoryButton
              text={item.name}
              backgroundColor={COLORS.accentPrimary}
              textColor={COLORS.primary}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CourseInformation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: "DMSans_700Bold",
  },
});
