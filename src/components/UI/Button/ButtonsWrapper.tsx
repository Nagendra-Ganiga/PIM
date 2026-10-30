// ButtonsWrapper Features
// - Reusable button component for React Native applications.
// - Supports four button types: Default, Icon, Icon with Text, and Plain Text.
// - Supports multiple button variants: Filled, Outlined, Success,
//   Success Outlined, Danger, Danger Outlined, Warning,
//   Warning Outlined, Info, and Info Outlined.
// - Customizable button title using the title prop.
// - Handles button clicks through the optional onPress callback.
// - Supports disabled state to prevent button interaction.
// - Automatically applies disabled background, border, and text styles.
// - Supports customizable icons using the icon prop.
// - Supports left and right icon positioning using iconPosition.
// - Allows icon-only buttons with optional background and border variants.
// - Supports icon and text alignment with configurable spacing.
// - Provides plain text buttons without background or border.
// - Supports custom button styling through the optional style prop.
// - Dynamically applies button background, border, and text styles.
// - Uses separate text styles for each button variant.
// - Detects outlined variants automatically to apply appropriate styles.
// - Uses centralized ButtonStyle styles for consistent UI.
// - Reduces code duplication by reusing a single component for different button types.
// - Suitable for forms, confirmation dialogs, toolbars, navigation,
//   success/error messages, and general application actions.

import React from 'react';
import { Text, TouchableOpacity, View, type ViewStyle } from 'react-native';

type ButtonVariant =
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

type ButtonsWrapperProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  buttonType?: 'default' | 'icon' | 'iconText' | 'text';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
};

export default function ButtonsWrapper({
  title,
  onPress,
  disabled = false,
  variant,
  buttonType = 'default',
  icon,
  iconPosition = 'left',
  style,
}: ButtonsWrapperProps) {
  // Default variant applies only to default buttons
  const activeVariant: ButtonVariant =
    variant ?? (buttonType === 'default' ? 'filled' : 'filled');

  const isOutlined = activeVariant.toLowerCase().includes('outlined');

  // Button background and border styles
  const buttonClass = disabled
    ? isOutlined
      ? ButtonStyle.disabledOutlined
      : ButtonStyle.disabled
    : ButtonStyle[activeVariant];

  // Button text styles
  const textStyleMap: Record<ButtonVariant, string> = {
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
    : textStyleMap[activeVariant];

  const isPlainText = buttonType === 'text';
  const isIconOnly = buttonType === 'icon';

  // Render icon
  const renderIcon = () => (icon ? <View>{icon}</View> : null);

  // Button container styles
  const containerClass = isPlainText
    ? ButtonStyle.textButton
    : isIconOnly
    ? variant
      ? `${ButtonStyle.iconButton} ${buttonClass}`
      : ButtonStyle.iconButton
    : buttonType === 'iconText'
    ? `${ButtonStyle.btnBase} ${buttonClass}`
    : `${ButtonStyle.btnBase} ${buttonClass}`;

  return (
    <TouchableOpacity
      className={containerClass}
      style={style}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isIconOnly && renderIcon()}

      {buttonType === 'iconText' && (
        <View className={ButtonStyle.btnContentBase}>
          {iconPosition === 'left' && renderIcon()}

          {title && (
            <Text className={`${ButtonStyle.btnTextBase} ${textClass}`}>
              {title}
            </Text>
          )}

          {iconPosition === 'right' && renderIcon()}
        </View>
      )}

      {(buttonType === 'default' || isPlainText) && title && (
        <Text
          className={
            isPlainText
              ? ButtonStyle.plainText
              : `${ButtonStyle.btnTextBase} ${textClass}`
          }
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

// Component for styling buttons in the application
export const ButtonStyle = {
  // Button base styles
  btnBase:
    'rounded-[5px] border py-[8px] px-[20px] items-center justify-center',

  // Default button text
  btnTextBase: 'text20RWhite',

  // Button backgrounds
  filled: 'bg-brandBlue border-brandBlue',
  outlined: 'bg-transparent border-brandBlue',

  success: 'bg-green-600 border-green-600',
  successOutlined: 'bg-transparent border-green-600',

  danger: 'bg-red border-red',
  dangerOutlined: 'bg-transparent border-red-600',

  warning: 'bg-amber-500 border-amber-500',
  warningOutlined: 'bg-transparent border-amber-500',

  info: 'bg-sky-600 border-sky-600',
  infoOutlined: 'bg-transparent border-sky-600',

  disabled: 'bg-gray-400 border-gray-400',
  disabledOutlined: 'bg-transparent border-gray-400',

  // Button Text styles
  btnTextFilled: 'text20RWhite',
  btnTextOutlined: 'text20RBrandBlue',

  btnTextSuccess: 'text20RWhite',
  btnTextSuccessOutlined: 'text20RSuccess',

  btnTextDanger: 'text20RWhite',
  btnTextDangerOutlined: 'text20RRed',

  btnTextWarning: 'text20RWhite',
  btnTextWarningOutlined: 'text20RWarning',

  btnTextInfo: 'text20RWhite',
  btnTextInfoOutlined: 'text20RInfo',

  btnTextDisabled: 'text20RWhite',
  btnTextDisabledOutlined: 'text20RDarkGray',

  // Icon button
  iconButton: 'self-start rounded-[5px] p-[10px] items-center justify-center',
  // Button content styles
  btnContentBase: 'flex-row items-center gap-[10px]',
  // Plain text button
  textButton: 'items-center justify-center',
  plainText: 'text20RBrandBlue',
};
