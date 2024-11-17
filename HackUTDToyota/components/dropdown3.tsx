// In components/Dropdown3.tsx
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Dropdown3: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('OptionX');

  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="OptionX" value="OptionX" />
        <Picker.Item label="OptionY" value="OptionY" />
        <Picker.Item label="OptionZ" value="OptionZ" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

export default Dropdown3;
