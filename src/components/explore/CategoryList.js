import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import responsiveFonts from '~utils/responsiveFonts';

import CategoryButton from '../core/CategoryButton';

function CategoryList(props) {
  const { header, data, style, onCategoryChange } = props;

  return (
    <View style={style}>
      {header ? <Text style={styles.header}>Browser Category</Text> : null}
      <FlatList
        style={styles.categories}
        data={data}
        renderItem={({ item }) => <CategoryButton onPress={() => onCategoryChange(item.id)} text={item.name} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

CategoryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  header: PropTypes.bool,
  style: PropTypes.shape({}),
  onCategoryChange: PropTypes.func
};

CategoryList.defaultProps = {
  header: false,
  style: {},
  onCategoryChange: () => {}
};

export default CategoryList;

const styles = StyleSheet.create({
  categories: {
    marginTop: '2%',
  },
  header: {
    fontFamily: 'DMSans_700Bold',
    fontSize: responsiveFonts(14),
  },
});
