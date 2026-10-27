import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonStyle } from '../../../styles/GlobalStyles';

type ButtonsWrapperProps = {
  title: string;
  onPress: () => void;
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
