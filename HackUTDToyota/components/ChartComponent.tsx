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
        dotColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Dot color (white)
        dotRadius: 5, // Dot size
      },
      {
        // Second dataset (line 2)
        data: [80, 150, 250, 350, 450, 550], // Y-values for line 2
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Line 2 color (red)
        strokeWidth: 2, // Line thickness
        withDots: true, // Show dots on data points
        dotColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Dot color (white)
        dotRadius: 5, // Dot size
      },
    ],
    legend: ['Revenue', 'Cost'], // Legend to show labels for the lines
  };

  const chartConfig = {
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // Line color
    style: { borderRadius: 16 },
  };

  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth - 32}  // Adjust chart width to screen size
        height={220}  // Chart height
        chartConfig={chartConfig}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
};

export default ChartComponent;