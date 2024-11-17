import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Dropdown1 from '@/components/dropdown1'; // Import the Dropdown component
import Dropdown2 from '@/components/dropdown2'; // Import the Dropdown component
import Dropdown3 from '@/components/dropdown3'; // Import the Dropdown component

import ChartComponent from '@/components/ChartComponent';
import ScrollbarOnly from '@/components/ScrollbarOnly'; // Import the ScrollbarOnly component

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar for better appearance */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Wrap Dropdown and ChartComponent inside ScrollbarOnly */}
      <ScrollbarOnly>
        {/* Dropdown above the chart */}
        <Dropdown1/>
        <ChartComponent />
        <Dropdown2/>
        <Dropdown3/>

      </ScrollbarOnly>
    </SafeAreaView>
  );
};

// StyleSheet to manage layout and overall appearance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
