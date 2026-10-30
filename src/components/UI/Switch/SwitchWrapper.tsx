// SwitchWrapper Component – Features Implemented
// - Created a reusable SwitchWrapper component using React Native’s built-in Switch
// - Used TypeScript (SwitchProps) for type safety and better prop management
// - Used Omit to define custom value and onValueChange props
// - Added default values for track color, thumb color, iOS background color, and disabled state
// - Implemented destructuring to extract props cleanly
// - Used the onValueChange callback to handle switch ON/OFF changes
// - Used the rest operator (...rest) to support additional props such as style, testID, and accessibility properties
// - Implemented props forwarding to pass additional properties to the native Switch
// - Exported the component for reuse across multiple screens
// - Supported controlled component behavior, allowing the parent component to manage the switch state

import React from 'react';
import { Switch, type SwitchProps } from 'react-native';

type SwitchWrapperProps = Omit<SwitchProps, 'value' | 'onValueChange'> & {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const SwitchWrapper = ({
  trackColor = {
    false: '#767577',
    true: '#81b0ff',
  },
  thumbColor = '#f4f3f4',
  ios_backgroundColor = '#3e3e3e',
  value,
  onValueChange,
  disabled = false,
  ...rest
}: SwitchWrapperProps) => {
  return (
    <Switch
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      {...rest}
    />
  );
};

export default SwitchWrapper;
