import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {checked && <View style={styles.checkboxChecked} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: 'black',
  },
});

export default Checkbox;
