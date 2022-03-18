import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Divider from '~components/core/Divider';
import AuthorButton from '~components/courseDetail/AuthorButton';
import CourseInformation from '~components/courseDetail/CourseInformation';
import NavigatorText from '~components/navigations/NavigatorText';
import Colors from '~constants/Colors';
import { addToBasket } from '~features/BasketSlice';
import { openTabBar } from '~features/TabBarSlice';
import responsiveFonts from '~utils/ResponsiveFonts';

function CourseDetail() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mockCourse] = useState({
    id: '1',
    title: 'JavaScript Best Practices Course',
    author: 'Burak Yazan',
    score: 4.5,
    level: 'All Level',
    price: 25,
    categories: [
      { id: '1', name: 'Swift UI' },
      { id: '2', name: 'Software Development' },
    ],
    description: `Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Vel quam elementum pulvinar etiamnim lobortis scelerisque. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....`,
  });

  const goBack = () => {
    dispatch(openTabBar());
    navigation.goBack();
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket(mockCourse));
  };

  const handleSeeDetails = () => {
    navigation.navigate('VideoPlayer');
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text="Course Detail"
            onPress={goBack}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <CourseInformation title={mockCourse.title} data={mockCourse.categories} />
      </View>
      <View style={styles.space} />
      <View style={styles.lowerPart}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{mockCourse.description}</Text>
        </View>
        <View style={styles.bottomArea}>
          <Divider />
          <AuthorButton
            onPress={() => {
              navigation.navigate('Author');
            }}
          />
          <View style={styles.buttonWrapper}>
            <Button
              title="See Details"
              buttonStyle={styles.button}
              containerStyle={styles.buttonSeeDetailContainer}
              onPress={handleSeeDetails}
            />
            <Button
              title="Add To Basket"
              buttonStyle={[styles.button, styles.buttonSuccess]}
              containerStyle={styles.buttonAddToBasketContainer}
              onPress={handleAddToBasket}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CourseDetail;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
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
    flex: 6,
    backgroundColor: Colors.lightBaseOne,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  space: {
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  descriptionHeader: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_400Regular',
    color: Colors.lightBaseThree,
  },
  description: {
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
    color: Colors.darkBaseOne,
    marginTop: '5%',
    lineHeight: 22,
  },
  bottomArea: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: '100%',
  },
  buttonSuccess: {
    backgroundColor: Colors.success,
  },
  buttonSeeDetailContainer: {
    flex: 1,
    paddingRight: 10,
  },
  buttonAddToBasketContainer: {
    flex: 1,
    paddingLeft: 10,
  },
});
