import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

import CategoryButton from '../core/CategoryButton';

function CourseInformation(props) {
  const { data, title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
