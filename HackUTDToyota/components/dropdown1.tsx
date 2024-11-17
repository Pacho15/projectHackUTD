// In components/Dropdown.tsx
import { Picker } from '@react-native-picker/picker';

import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Dropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('Option1');

  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="Option1" value="Option1" />
        <Picker.Item label="Option2" value="Option2" />
        <Picker.Item label="Option3" value="Option3" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

export default Dropdown;
