// RadioButtonWrapper Features:
// - Reusable radio button component for multiple screens.
// - Customizable label text using the label prop.
// - Controlled selected and unselected states using the selected prop.
// - Click handling through the onPress callback.
// - Adjustable radio button size using the size prop.
// - Supports disabling interaction using the disabled prop.
// - Custom styling for the radio button, label, and container.
// - Displays an inner circle only when the radio button is selected.
// - Automatically adjusts the inner circle size based on the radio button size.
// - Supports accessibility for screen readers using accessibilityRole and accessibilityState.
// - Supports multiple radio options with a shared selected value.
// - Suitable for forms, settings, preferences, and single-choice selections.

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RadioButtonStyle } from '../../../styles/GlobalStyles';

type RadioButtonWrapperProps = {
  label?: string;
  selected: boolean;
  onPress: () => void;
  size?: number;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
};

export default function RadioButtonWrapper({
  label,
  selected,
  onPress,
  size = 20,
  disabled = false,
  className = '',
  labelClassName = '',
  containerClassName = '',
}: RadioButtonWrapperProps) {
  const containerStyles = [
    RadioButtonStyle.radioWrapper,
    disabled && 'opacity-50',
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const radioStyles = [
    RadioButtonStyle.radioButton,
    selected ? RadioButtonStyle.selectedRadio : 'bg-white border-gray-400',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelStyles = [RadioButtonStyle.radioLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      className={containerStyles}
    >
      <View
        style={{ width: size, height: size, borderRadius: size / 2 }}
        className={radioStyles}
      >
        {selected && (
          <View
            style={{
              width: size * 0.5,
              height: size * 0.5,
              borderRadius: (size * 0.5) / 2,
            }}
            className={RadioButtonStyle.radioInner}
          />
        )}
      </View>

      {label ? <Text className={labelStyles}>{label}</Text> : null}
    </TouchableOpacity>
  );
}
