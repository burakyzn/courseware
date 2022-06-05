import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import COLORS from '~constants/colors';
import PAGES from '~constants/pages';
import { closeTabBar } from '~features/TabBarSlice';
import responsiveFonts from '~utils/ResponsiveFonts';

const hp = Dimensions.get('window').height;
function CourseCard(props) {
  const { id, title, description, categories, author, authorId, score, level, price } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToCourseDetail = () => {
    dispatch(closeTabBar());
    navigation.navigate(PAGES.courseDetail, {
      id,
      title,
      author,
      authorId,
      score,
      level,
      price,
      categories,
      description
    });
  };

  return (
    <TouchableOpacity onPress={goToCourseDetail}>
      <View height={hp * 0.15} width="100%">
        <View style={styles.container}>
          <View style={styles.descriptionWrapper}>
            <View style={styles.description}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{price} $</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Ionicons name="bookmarks" size={24} color="black" />
            </View>
          </View>
          <View style={styles.courseInfoWrapper}>
            <Ionicons
              name="star"
              size={15}
              color={COLORS.warning}
              style={{ marginBottom: '0.5%' }}
            />
            <Text style={styles.score}>{score}</Text>
            <Text style={styles.author}>
              {' '}
              • By {author} • {level}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  authorId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CourseCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBaseOne,
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
  },
  description: {
    flex: 3,
  },
  price: {
    marginTop: '5%',
    fontSize: responsiveFonts(14),
    color: COLORS.darkBaseOne,
    fontFamily: 'DMSans_700Bold',
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_700Bold',
    marginLeft: 5,
  },
  author: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_400Regular',
  },
  courseInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
