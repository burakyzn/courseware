import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from 'constants/Colors';
import NavigatorText from 'components/navigations/NavigatorText';
import Searchbox from 'components/explore/SearchBox';
import CategoryList from 'components/explore/CategoryList';
import CourseCardList from 'components/core/CourseCardList';

function Explore() {
  const navigation = useNavigation();
  const [recommendedCategories] = useState([
    {
      id: '1',
      name: 'Technology',
    },
    {
      id: '2',
      name: 'JavaScript',
    },
    {
      id: '3',
      name: 'Science',
    },
    {
      id: '4',
      name: 'English',
    },
    {
      id: '5',
      name: 'React Native',
    },
    {
      id: '6',
      name: 'React',
    },
    {
      id: '7',
      name: 'Programming',
    },
    {
      id: '8',
      name: 'Swift',
    },
    {
      id: '9',
      name: 'Finance',
    },
  ]);

  const [recommendedCourses] = useState([
    {
      id: '1',
      title: 'JavaScript Best Practices Course',
      author: 'Burak Yazan',
      score: 4.5,
      level: 'All Level',
      price: 25,
    },
    {
      id: '2',
      title: 'Introduction to C++',
      author: 'Şule Aktaş',
      score: 4.8,
      level: 'All Level',
      price: 25,
    },
    {
      id: '3',
      title: 'Introduction to Java',
      author: 'Maftun Hashimli',
      score: 4.3,
      level: 'All Level',
      price: 25,
    },
    {
      id: '4',
      title: 'React Native Crash Course',
      author: 'Burak Yazan',
      score: 4.5,
      level: 'Entry Level',
      price: 25,
    },
    {
      id: '5',
      title: 'Responsive Web Design',
      author: 'Barış Ertakuş',
      score: 4.9,
      level: 'All Level',
      price: 25,
    },
    {
      id: '6',
      title: 'Data Visualization With D3.js',
      author: 'Barış Ertakuş',
      score: 4.2,
      level: 'All Level',
      price: 25,
    },
  ]);

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text="Explore"
            onPress={() => {
              navigation.navigate('HomeStack');
            }}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.searchboxWrapper}>
          <Searchbox width="100%" height={60} placeholder="Search for courses" />
        </View>
        <CategoryList header data={recommendedCategories} style={styles.categoryWrapper} />
        <CourseCardList
          data={recommendedCourses}
          style={styles.recommendedCourses}
          header
          leftText="Recommended Courses"
        />
      </View>
    </View>
  );
}

export default Explore;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 10,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  searchboxWrapper: {
    justifyContent: 'flex-end',
    flex: 2,
  },
  categoryWrapper: {
    paddingTop: '5%',
    flex: 2,
  },
  recommendedCourses: {
    paddingTop: '5%',
    flex: 10,
  },
});
