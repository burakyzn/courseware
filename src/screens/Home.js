import React, { useState, useEffect,  } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import CourseCardList from '~components/core/CourseCardList';
import ProfileCard from '~components/core/ProfileCard';
import CurrentCourse from '~components/home/CurrentCourse';
import Colors from '~constants/Colors';
import courseService from '../services/courseService'

const hp = Dimensions.get('window').height;

function Home() {
  const [currentCourse] = useState({
    title: 'Zero to hero Java Spring Boot crash course',
    author: 'Barış Ertakuş',
    progression: '25%',
  });

  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(async () => setRecommendedCourses(await courseService.getAll()), [])
  
  return (
    <View style={styles.background}>
      <View style={styles.bottomContainer} />
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <ProfileCard
            fullName="Burak Yazan"
            summary="Welcome back"
            iconName="notifications-outline"
          />
        </View>
        <View style={styles.currentCourseWrapper}>
          <CurrentCourse
            width="100%"
            height={hp * 0.23}
            progression={currentCourse.progression}
            title={currentCourse.title}
            author={currentCourse.author}
          />
        </View>
        <CourseCardList
          data={recommendedCourses}
          style={styles.recommendedCourses}
          header
          leftText="Recommendation"
        />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  profileWrapper: {
    marginTop: '5%',
    width: '100%',
    height: hp * 0.06,
  },
  currentCourseWrapper: {
    marginTop: '5%',
  },
  courseWrapper: {
    marginBottom: 20,
  },
  recommendedCourses: {
    marginTop: '5%',
    width: '100%',
    flex: 1,
  },
  bottomContainer: {
    height: hp * 0.65,
    backgroundColor: Colors.lightBaseTwo,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
