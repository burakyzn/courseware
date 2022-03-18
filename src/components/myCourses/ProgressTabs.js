import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import COLORS from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

import CourseCardList from '../core/CourseCardList';
import TabButton from '../core/TabButton';

function ProgressTabs() {
  const [isDoneSection, setIsDoneSection] = useState(false);
  const [inProgressCourses] = useState([
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
      title: 'Data Visualization With D3.js',
      author: 'Barış Ertakuş',
      score: 4.2,
      level: 'All Level',
      price: 25,
    },
  ]);
  const [doneCourses] = useState([
    {
      id: '1',
      title: 'React Native Crash Course',
      author: 'Burak Yazan',
      score: 4.5,
      level: 'Entry Level',
      price: 25,
    },
    {
      id: '2',
      title: 'Responsive Web Design',
      author: 'Barış Ertakuş',
      score: 4.9,
      level: 'All Level',
      price: 25,
    },
    {
      id: '3',
      title: 'Data Visualization With D3.js',
      author: 'Barış Ertakuş',
      score: 4.2,
      level: 'All Level',
      price: 25,
    },
    {
      id: '4',
      title: 'Data Visualization With D3.js',
      author: 'Barış Ertakuş',
      score: 4.2,
      level: 'All Level',
      price: 25,
    },
    {
      id: '5',
      title: 'Data Visualization With D3.js',
      author: 'Barış Ertakuş',
      score: 4.2,
      level: 'All Level',
      price: 25,
    },
  ]);

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
    backgroundColor: COLORS.lightBaseTwo,
  },
  selectedTab: {
    color: COLORS.darkBaseOne,
  },
  nonSelectedTab: {
    color: COLORS.lightBaseThree,
  },
});
