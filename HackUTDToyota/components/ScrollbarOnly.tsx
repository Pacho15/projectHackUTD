import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ScrollbarOnly({ children }: PropsWithChildren<{}>) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView takes up the available space
  },
});
