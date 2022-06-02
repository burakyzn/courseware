import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CourseCardList from '~components/core/CourseCardList';
import CategoryList from '~components/explore/CategoryList';
import Searchbox from '~components/explore/SearchBox';
import NavigatorText from '~components/navigations/NavigatorText';
import Colors from '~constants/Colors';
import courseService from '../services/courseService';

function Explore() {
  const navigation = useNavigation();

  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [search, setSearch] = useState("");

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

  useEffect(async () => {
    let allCourses = await courseService.getAll();

    allCourses = allCourses.map(course => {
      return {
        ...course,
        visible: true
      }
    })

    setRecommendedCourses(allCourses)
  }, []);

  useEffect(() => {
    let filteredCourses = recommendedCourses.map((course) => {
      return {
        ...course,
        visible: course.title.includes(search)
      }
    });
    
    setRecommendedCourses(filteredCourses);
  }, [search])

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
          <Searchbox width="100%" height={60} placeholder="Search for courses" setSearch={setSearch} />
        </View>
        <CategoryList header data={recommendedCategories} style={styles.categoryWrapper} />
        <CourseCardList
          data={recommendedCourses.filter(course => course.visible)}
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
    backgroundColor: Colors.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 10,
    backgroundColor: Colors.lightBaseTwo,
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
