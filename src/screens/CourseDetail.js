import { useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigation, useRoute} from '@react-navigation/native';

import Divider from '~components/core/Divider';
import AuthorButton from '~components/courseDetail/AuthorButton';
import CourseInformation from '~components/courseDetail/CourseInformation';
import NavigatorText from '~components/navigations/NavigatorText';
import COLORS from '~constants/colors';
import { addToBasket, removeFromBasket } from '~features/basketSlice';
import { openTabBar } from '~features/tabBarSlice';
import {categorySelector} from '~features/categorySlice';
import responsiveFonts from '~utils/responsiveFonts';
import authorService from '~services/authorService';
import PAGES, {PAGES_TITLE} from '~constants/pages';
import SnackBar from 'react-native-snackbar-component';

function CourseDetail() {
  const navigation = useNavigation();
  const {id, title, authorId, score, level, price, categories, description} = useRoute().params;

  const [snackbar, setSnackbar] = useState(false);

  const [author, setAuthor] = useState({
    name: "",
    imageURL: "https://avatars.githubusercontent.com/u/102129762",
    courseCount: 0,
    studentCount: 0,
    reviewCount: 0
  })

  const categoryList = useSelector(categorySelector);
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchAuthor = async () => {
      let author = await authorService.getById(authorId);
      setAuthor(author);
    }
    fetchAuthor().catch(console.error);
  }, [])
  

  const goBack = () => {
    dispatch(openTabBar());
    navigation.goBack();
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket({
      id,
      title,
      score,
      level,
      price,
      authorId,
      categories,
      description,
      author : author.name,
    }));
    setSnackbar(true);

    setTimeout(
      () => setSnackbar(false), 
      1500
    );
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(id));
  }

  const handleSeeDetails = () => {
    navigation.navigate(PAGES.videoPlayer);
  };

  const handleCourseCategories = () => {
    return categories.map((categoryId) => {
      return {id: categoryId.toString(), name : categoryList.find(category => category.id == categoryId).name}
    });
  }

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text={PAGES_TITLE.courseDetail}
            onPress={goBack}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <CourseInformation title={title} data={handleCourseCategories()} />
      </View>
      <View style={styles.space} />
      <View style={styles.lowerPart}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.bottomArea}>
          <Divider />
          <AuthorButton
            name={author.name}
            imageURL={author.imageURL}
            courseCount={author.courseCount}
            studentCount={author.studentCount}
            onPress={() => {
              navigation.navigate(PAGES.author, {
                authorId: author.id,
                authorName: author.name,
                courseCount: author.courseCount,
                studentCount: author.studentCount,
                reviewCount: author.reviewCount,
                imageURL:author.imageURL
              });
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
      <SnackBar visible={snackbar} textMessage="The course has been added to basket!" actionHandler={handleRemoveFromBasket} actionText="Undo"/>
    </View>
  );
}

export default CourseDetail;

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
    flex: 6,
    backgroundColor: COLORS.lightBaseOne,
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
    color: COLORS.lightBaseThree,
  },
  description: {
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
    color: COLORS.darkBaseOne,
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
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: '100%',
  },
  buttonSuccess: {
    backgroundColor: COLORS.success,
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
