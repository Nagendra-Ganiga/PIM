// ButtonsWrapper Features
// - Reusable button component for React Native projects.
// - Supports multiple button variants:
//   - Filled- Outlined- Success- Success Outlined- Danger- Danger          Outlined-Warning- Warning Outlined- Info- Info Outlined
// - Customizable button title using the title prop.
// - Handles button clicks through the optional onPress callback.
// - Supports a disabled state to prevent button interaction.
// - Automatically applies disabled styles based on the button variant.
// - Dynamically applies button background, border, and text styles.
// - Uses separate text styles for each button variant.
// - Detects outlined variants automatically to apply the correct disabled styles.
// - Uses centralized ButtonStyle styles for consistent UI across the application.
// - Reduces code duplication by reusing a single component for different button types.
// - Suitable for forms, confirmation dialogs, success/error messages, and general actions.
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonStyle } from '../../../styles/GlobalStyles';

type ButtonsWrapperProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?:
    | 'filled'
    | 'outlined'
    | 'success'
    | 'successOutlined'
    | 'danger'
    | 'dangerOutlined'
    | 'warning'
    | 'warningOutlined'
    | 'info'
    | 'infoOutlined';
};

export default function ButtonsWrapper({
  title,
  onPress,
  disabled = false,
  variant = 'filled',
}: ButtonsWrapperProps) {
  const isOutlined = variant.toLowerCase().includes('outlined');

  const buttonClass = disabled
    ? isOutlined
      ? ButtonStyle.disabledOutlined
      : ButtonStyle.disabled
    : ButtonStyle[variant];

  const textStyleMap: Record<string, string> = {
    filled: ButtonStyle.btnTextFilled,
    outlined: ButtonStyle.btnTextOutlined,
    success: ButtonStyle.btnTextSuccess,
    successOutlined: ButtonStyle.btnTextSuccessOutlined,
    danger: ButtonStyle.btnTextDanger,
    dangerOutlined: ButtonStyle.btnTextDangerOutlined,
    warning: ButtonStyle.btnTextWarning,
    warningOutlined: ButtonStyle.btnTextWarningOutlined,
    info: ButtonStyle.btnTextInfo,
    infoOutlined: ButtonStyle.btnTextInfoOutlined,
  };

  const textClass = disabled
    ? isOutlined
      ? ButtonStyle.btnTextDisabledOutlined
      : ButtonStyle.btnTextDisabled
    : textStyleMap[variant];

  return (
    <TouchableOpacity
      className={`${ButtonStyle.btnBase} ${buttonClass}`}
      disabled={disabled}
      onPress={onPress}
    >
      <Text className={`${ButtonStyle.btnTextBase} ${textClass}`}>{title}</Text>
    </TouchableOpacity>
  );
}
