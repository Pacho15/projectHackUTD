import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ChartComponent: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // X-Axis labels
    datasets: [
      {
        // First dataset (line 1)
        data: [100, 200, 300, 400, 500, 600], // Y-values for line 1
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line 1 color (purple)
        strokeWidth: 2, // Line thickness
        withDots: true, // Show dots on data points
        dotRadius: 5, // Dot size
      },
      {
        // Second dataset (line 2)
        data: [190, 150, 250, 350, 450, 550], // Y-values for line 2
        color: (opacity = 0) => `rgba(255, 99, 132, ${opacity})`, // Line 2 color (red)
        strokeWidth: 2, // Line thickness
        withDots: true, // Show dots on data points
        dotRadius: 5, // Dot size
      },
    ],
    legend: ['Revenue', 'Cost'], // Legend to show labels for the lines
  };

  const chartConfig = {
    style: { borderRadius: 1 },
    
  };

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },

          useShadowColorFromDataset: true
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          
        }}
        
      />
    </View>
  );
};

export default ChartComponent;