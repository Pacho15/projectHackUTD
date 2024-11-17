import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ChartComponent from '@/components/ChartComponent';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar for better appearance */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Render the ChartComponent */}
      <ChartComponent />
    </SafeAreaView>
  );
};

// StyleSheet to manage layout and overall appearance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // Sets background color for the app
    padding: 16,              // Adds padding around the container
  },
});

export default App;