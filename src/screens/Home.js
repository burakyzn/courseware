import React, { useState, useEffect,  } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CourseCardList from '~components/core/CourseCardList';
import ProfileCard from '~components/core/ProfileCard';
import CurrentCourse from '~components/home/CurrentCourse';
import COLORS from '~constants/colors';
import courseService from '../services/courseService'
import {lastCourseSelector, fetchUserData, userSelector} from '~features/AuthSlice';
import {fetchCategoryData} from '~features/CategorySlice';

const hp = Dimensions.get('window').height;

function Home() {
  const dispatch = useDispatch();
  const currentCourse = useSelector(lastCourseSelector);
  const userData = useSelector(userSelector);

  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => dispatch(fetchUserData()),[])
  useEffect(() => dispatch(fetchCategoryData()),[])
  useEffect(() => {
    let fetchAllCourses = async () => {
      let allCourses = await courseService.getAll();
      setRecommendedCourses(allCourses);
    }
    fetchAllCourses().catch(console.error);
  }, [])
  
  return (
    <View style={styles.background}>
      <View style={styles.bottomContainer} />
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <ProfileCard
            fullName={userData.name}
            summary="Welcome back"
            iconName="notifications-outline"
            imageURL={userData.imageURL}
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
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.lightBaseTwo,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
