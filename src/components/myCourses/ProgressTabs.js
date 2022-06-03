import React, { useState, useEffect, useLayoutEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';
import {inProgressCourseSelector, doneCourseSelector} from '~features/AuthSlice';
import courseService from '../../services/courseService'

import CourseCardList from '../core/CourseCardList';
import TabButton from '../core/TabButton';

function ProgressTabs() {
  const [courses, setCourses] = useState([]);
  const [isDoneSection, setIsDoneSection] = useState(false);
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [doneCourses, setDoneCourses] = useState([]);

  const inProgressCourseIds = useSelector(inProgressCourseSelector);
  const doneCourseIds = useSelector(doneCourseSelector);

  useLayoutEffect(() => {
    let fetchData = async () => {
      let course = await courseService.getAll();
      setCourses(course);
    }

    fetchData().catch(console.error);
  }, [])

  useEffect(async () => {
    let inProgressCourses = courses.filter((course) => {
      return inProgressCourseIds.includes(course.id);
    });

    setInProgressCourses(inProgressCourses);
  }, [inProgressCourseIds, courses])

  useEffect(async () => {
    let doneCourses = courses.filter((course) => {
      return doneCourseIds.includes(course.id);
    });

    setDoneCourses(doneCourses);
  }, [doneCourseIds, courses])
  
  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <TabButton
          text="In Progress"
          condition={!isDoneSection}
          onPress={() => {
            setIsDoneSection(false);
          }}
        />
        <TabButton
          text="Done"
          condition={isDoneSection}
          onPress={() => {
            setIsDoneSection(true);
          }}
        />
      </View>
      <View style={styles.tabContentWrapper}>
        <CourseCardList data={isDoneSection ? doneCourses : inProgressCourses} />
      </View>
    </View>
  );
}

export default ProgressTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContentWrapper: {
    flex: 6,
  },
  tabText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: responsiveFonts(14),
  },
  selectedTabContainer: {
    backgroundColor: Colors.lightBaseTwo,
  },
  selectedTab: {
    color: Colors.darkBaseOne,
  },
  nonSelectedTab: {
    color: Colors.lightBaseThree,
  },
});
