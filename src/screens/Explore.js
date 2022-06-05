import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import CourseCardList from '~components/CourseCardList';
import CategoryList from '~components/explore/CategoryList';
import Searchbox from '~components/explore/SearchBox';
import NavigatorText from '~components/NavigatorText';
import COLORS from '~constants/colors';
import courseService from '~services/courseService';
import {categorySelector} from '~features/categorySlice';
import { PAGES_STACK, PAGES_TITLE} from '~constants/pages';

function Explore() {
  const navigation = useNavigation();

  const [searchResultText, setSearchResultText] = useState("Recommended Courses");
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  const categories = useSelector(categorySelector);

  useEffect(() => {
    let fetchAllCourses = async () => {
      let allCourses = await courseService.getAll();
      allCourses = allCourses.map(course => {
        return {
          ...course,
          visible: true
        }
      })
      setRecommendedCourses(allCourses)
    }
    fetchAllCourses().catch(console.error);
  }, []);
  
  const handleCategoryChange = async (categoryId) => {
    let course = await courseService.getByCategoryId(categoryId);
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
            text={PAGES_TITLE.explore}
            onPress={() => {
              navigation.navigate(PAGES_STACK.homeStack);
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
