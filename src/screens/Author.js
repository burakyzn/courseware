import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import AchievementDetail from '~components/author/AchievementDetail';
import CourseCardList from '~components/core/CourseCardList';
import Divider from '~components/core/Divider';
import ProfileCard from '~components/core/ProfileCard';
import NavigatorText from '~components/navigations/NavigatorText';
import COLORS from '~constants/colors';
import courseService from '~services/courseService'
import {PAGES_TITLE} from '~constants/pages';

function Author() {
  const navigation = useNavigation();
  const {
    authorId,
    authorName,
    studentCount,
    reviewCount,
    imageURL
  } = useRoute().params;

  const [authorCourses, setAuthorCourses] = useState([])

  useEffect(() => {
    let fetchAuthorCourses = async () => {
      let courses = await courseService.getByAuthorId(authorId);
      setAuthorCourses(courses);
    }
    fetchAuthorCourses().catch(console.error);
  }, [])
  
  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text={PAGES_TITLE.author}
            onPress={() => {
              navigation.goBack();
            }}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <ProfileCard
          fullName={authorName}
          summary="Software Engineer"
          imageURL={imageURL}
          iconName="chatbox-ellipses-outline"
        />
        <Divider />
        <AchievementDetail studentCount={studentCount} reviewCount={reviewCount} />
      </View>
      <View style={styles.lowerPart}>
        <CourseCardList
          data={authorCourses}
          style={styles.authorCourses}
          header
          leftText="Courses"
          rightText={`Total ${authorCourses.length}`}
        />
      </View>
    </View>
  );
}

export default Author;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  middlePart: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 7,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authorCourses: {
    marginTop: '3%',
    width: '100%',
  },
});
