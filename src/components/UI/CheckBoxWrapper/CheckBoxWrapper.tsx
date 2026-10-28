// CheckBoxWrapper Features:
// - Reusable checkbox component for multiple screens.
// - Customizable label text using the label prop.
// - Controlled checked and unchecked states using the checked prop.
// - Click handling through the onPress callback.
// - Adjustable checkbox size using the size prop.
// - Supports disabling checkbox interaction using the disabled prop.
// - Custom styling for the checkbox, label, and container.
// - Displays a check icon only when the checkbox is selected.
// - Automatically adjusts the check icon size based on the checkbox size.
// - Supports accessibility for screen readers using accessibilityRole and accessibilityState.
// - Supports multiple independent checkboxes using separate state values or a single object state.
// - Suitable for forms, settings, preferences, and terms-and-conditions selections.

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Images } from '../../../assets/images/Images';
import { CheckboxStyle } from '../../../styles/GlobalStyles';

type CheckBoxWrapperProps = {
  label?: string;
  checked: boolean;
  onPress: () => void;
  size?: number;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
};

export default function CheckBoxWrapper({
  label,
  checked,
  onPress,
  size = 20,
  disabled = false,
  className = '',
  labelClassName = '',
  containerClassName = '',
}: CheckBoxWrapperProps) {
  const containerStyles = [
    CheckboxStyle.checkWrapper,
    disabled && 'opacity-50',
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const checkboxStyles = [
    CheckboxStyle.checkBox,
    checked ? CheckboxStyle.checkedBox : 'bg-white',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelStyles = [CheckboxStyle.checkLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      className={containerStyles}
    >
      <View style={{ width: size, height: size }} className={checkboxStyles}>
        {checked && (
          <Images.CheckWhite width={size * 0.55} height={size * 0.55} />
        )}
      </View>

      {label ? <Text className={labelStyles}>{label}</Text> : null}
    </TouchableOpacity>
  );
}
