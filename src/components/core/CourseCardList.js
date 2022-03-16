import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import CourseCard from "./CourseCard";

const CourseCardList = (props) => {
  const { data, style } = props;

  return (
    <FlatList
      data={data}
      style={style}
      renderItem={({ item }) => {
        return (
          <View style={styles.courseWrapper}>
            <CourseCard
              title={item.title}
              author={item.author}
              score={item.score}
              level={item.level}
              price={item.price}
            />
          </View>
        );
      }}
      keyExtractor={(course) => course.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CourseCardList;

const styles = StyleSheet.create({
  courseWrapper: {
    marginBottom: 20,
  },
});
