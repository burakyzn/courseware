import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import responsiveFonts from 'utils/ResponsiveFonts';
import CategoryButton from '../core/CategoryButton';

function CategoryList(props) {
  const { header, data, style } = props;

  return (
    <View style={style}>
      {header ? <Text style={styles.header}>Browser Category</Text> : null}
      <FlatList
        style={styles.categories}
        data={data}
        renderItem={({ item }) => <CategoryButton text={item.name} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

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
