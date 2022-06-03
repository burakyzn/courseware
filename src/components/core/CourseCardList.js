import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

import CourseCard from './CourseCard';

function CourseCardList(props) {
  const { data, style, header, leftText, rightText } = props;

  return (
    <View style={[styles.container, style]}>
      {header ? (
        <View>
          <View style={styles.header}>
            {leftText ? <Text style={styles.headerLeftText}>{leftText}</Text> : null}
            {rightText ? <Text style={styles.headerRightText}>{rightText}</Text> : null}
          </View>
        </View>
      ) : null}
      <FlatList
        data={data}
        style={styles.courseList}
        renderItem={({ item }) => (
          <View style={styles.courseWrapper}>
            <CourseCard
              id={item.id}
              title={item.title}
              description={item.description}
              categories={item.categories}
              author={item.author}
              authorId={item.authorId}
              score={item.score}
              level={item.level}
              price={item.price}
            />
          </View>
        )}
        keyExtractor={(course) => course.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

CourseCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  style: PropTypes.shape(),
  header: PropTypes.bool,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
};

CourseCardList.defaultProps = {
  style: {},
  header: null,
  leftText: null,
  rightText: null,
};

export default CourseCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  courseWrapper: {
    marginBottom: 20,
  },
  courseList: {
    marginTop: '5%',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerLeftText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: responsiveFonts(14),
  },
  headerRightText: {
    fontFamily: 'DMSans_700Bold',
    color: Colors.lightBaseThree,
    fontSize: responsiveFonts(12),
  },
});
