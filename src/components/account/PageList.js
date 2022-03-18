import React from 'react';
import { StyleSheet, Text, SectionList, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import responsiveFonts from 'utils/ResponsiveFonts';
import COLORS from 'constants/Colors';

const hp = Dimensions.get('window').height;

function PageList() {
  const pageList = [
    {
      title: 'Account Settings',
      data: ['Account Security', 'Notification Preferences', 'Reminders'],
    },
    {
      title: 'Support',
      data: ['Ask Question', 'F.A.Q', 'About'],
    },
  ];

  const renderPage = (page) => (
    <TouchableOpacity style={styles.pageContainer}>
      <Text style={styles.pageName}>{page}</Text>
      <Ionicons name="chevron-forward-outline" size={hp * 0.04} color={COLORS.lightBaseThree} />
    </TouchableOpacity>
  );

  const renderPageHeader = (title) => <Text style={styles.pageHeaderName}>{title}</Text>;

  return (
    <SectionList
      sections={pageList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => renderPage(item)}
      renderSectionHeader={({ section: { title } }) => renderPageHeader(title)}
    />
  );
}

export default PageList;

const styles = StyleSheet.create({
  pageContainer: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageName: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
  },
  pageHeaderName: {
    color: COLORS.lightBaseThree,
    fontSize: responsiveFonts(10),
    fontFamily: 'DMSans_400Regular',
  },
});
