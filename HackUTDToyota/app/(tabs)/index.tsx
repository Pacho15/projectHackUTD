import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ChartComponent from '@/components/ChartComponent';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar for better appearance */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Wrap ChartComponent inside ParallaxScrollView and pass the required props */}
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }
      >
        <ChartComponent />
        
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

// StyleSheet to manage layout and overall appearance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',    // Centers the content vertically
    alignItems: 'center',        // Centers the content horizontally
    padding: 16,                 // Adds padding around the container
  },
  headerImage: {
    alignSelf: 'center', // Centers the icon horizontally in the header
    marginTop: 20,       // Adjust this value to position the icon vertically
  },
});

export default App;
