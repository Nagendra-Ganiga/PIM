import React, { useState } from 'react';

import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownWrapperProps = {
  data: DropdownItem[];
  value: string | null;
  onChange: (item: DropdownItem) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

export default function DropdownWrapper({
  data,
  value,
  onChange,
  placeholder = 'Select item',
  style,
}: DropdownWrapperProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={style}>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusedDropdown]}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : ''}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 56,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  focusedDropdown: {
    borderColor: '#2563eb',
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
  },
  selectedText: {
    fontSize: 14,
    color: '#000',
  },
});
