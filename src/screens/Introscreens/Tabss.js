import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab1 = () => {
  return (
    <View>
      <Text>Tab 1 Content</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View>
      <Text>Tab 2 Content</Text>
    </View>
  );
};

const Tabss = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.optionButton, selectedOption === 'Option 1' && styles.selectedOption]}
        onPress={() => handleOptionSelect('Option 1')}>
        <Text style={styles.optionText}>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionButton, selectedOption === 'Option 2' && styles.selectedOption]}
        onPress={() => handleOptionSelect('Option 2')}>
        <Text style={styles.optionText}>Option 2</Text>
      </TouchableOpacity>
      
    </View>
  );

  



}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default Tabss