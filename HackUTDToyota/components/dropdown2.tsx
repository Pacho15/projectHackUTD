// In components/Dropdown2.tsx
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Dropdown2: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('OptionA');

  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="OptionA" value="OptionA" />
        <Picker.Item label="OptionB" value="OptionB" />
        <Picker.Item label="OptionC" value="OptionC" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

export default Dropdown2;
