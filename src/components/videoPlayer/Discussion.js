import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Message from './Message';

function Discussion() {
  const discussionMockData = [
    {
      id: '1',
      photo: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Veronica Peters',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      photo: 'https://randomuser.me/api/portraits/men/64.jpg',
      name: 'Andre Steward',
      message:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      photo: 'https://randomuser.me/api/portraits/women/84.jpg',
      name: 'Sherry Cruz',
      message:
        'Lacus luctus accumsan tortor posuere ac. Ut porttitor leo a diam sollicitudin tempor id. ',
    },
    {
      id: '4',
      photo: 'https://randomuser.me/api/portraits/men/93.jpg',
      name: 'Gabe Hicks',
      message:
        'Tellus orci ac auctor augue mauris. At urna condimentum mattis pellentesque id nibh tortor id. Tristique risus nec feugiat in fermentum posuere urna nec. Amet est placerat in egestas erat imperdiet sed euismod nisi. Magna fringilla urna porttitor rhoncus dolor purus. Habitant morbi tristique senectus et netus et malesuada. Pellentesque adipiscing commodo elit at imperdiet dui accumsan.',
    },
    {
      id: '6',
      photo: 'https://randomuser.me/api/portraits/women/57.jpg',
      name: 'Isabella Dean',
      message:
        'Tristique risus nec feugiat in fermentum posuere urna nec. Amet est placerat in egestas erat imperdiet sed euismod nisi.',
    },
  ];

  return (
    <FlatList
      style={styles.container}
      data={discussionMockData}
      renderItem={({ item }) => (
        <Message sender={item.name} message={item.message} photoUrl={item.photo} />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Discussion;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
