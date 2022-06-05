import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import COLORS from '~constants/colors';
import responsiveFonts from '~utils/responsiveFonts';

import CategoryButton from '../CategoryButton';

function CourseInformation(props) {
  const { data, title } = props;

  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryButton
            text={item.name}
            backgroundColor={COLORS.accentPrimary}
            textColor={COLORS.primary}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

CourseInformation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

CourseInformation.defaultProps = {
  title: null,
};

export default CourseInformation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: 'DMSans_700Bold',
  },
});
