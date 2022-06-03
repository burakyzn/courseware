import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CourseCardList from '~components/core/CourseCardList';
import CategoryList from '~components/explore/CategoryList';
import Searchbox from '~components/explore/SearchBox';
import NavigatorText from '~components/navigations/NavigatorText';
import Colors from '~constants/Colors';
import courseService from '../services/courseService';
import categoryService from '../services/categoryService'

function Explore() {
  const navigation = useNavigation();

  const [searchResultText, setSearchResultText] = useState("Recommended Courses");
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(async () => setCategories(await categoryService.getAll()),[]);

  const handleCategoryChange = async (categoryId) => {
    let course = await courseService.getByCategory(categoryId);

    course = course.map(course => {
      return {
        ...course,
        visible: true
      }
    })
    
    setSearchResultText("Search Result");
    setRecommendedCourses(course);
  }

  const handleSearchTextChange = async (searchText) => {
    let filteredCourses = recommendedCourses.map((course) => {
      return {
        ...course,
        visible: course.title.toUpperCase().includes(searchText.toUpperCase())
      }
    });

      setSearchResultText("Search Result");
      setRecommendedCourses(filteredCourses);
  }
  
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
          <Searchbox width="100%" height={60} placeholder="Search for courses" onSearchTextChange={handleSearchTextChange} />
        </View>
        <CategoryList onCategoryChange={handleCategoryChange} header data={categories} style={styles.categoryWrapper} />
        <CourseCardList
          data={recommendedCourses.filter(course => course.visible)}
          style={styles.recommendedCourses}
          header
          leftText={searchResultText}
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
