import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

import CategoryButton from '../core/CategoryButton';

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
            backgroundColor={Colors.accentPrimary}
            textColor={Colors.primary}
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
    color: Colors.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: 'DMSans_700Bold',
  },
});
