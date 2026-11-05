// Button Features
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
import {
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
  type StyleProp,
} from 'react-native';

type ButtonVariant =
  | 'filled'
  | 'outlined'
  | 'softOutlined'
  | 'success'
  | 'successOutlined'
  | 'danger'
  | 'dangerOutlined'
  | 'warning'
  | 'warningOutlined'
  | 'info'
  | 'infoOutlined'
  | 'BackButton'
  | 'BackButtonOutlined';

export type ButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  buttonType?: 'default' | 'icon' | 'iconText' | 'text';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'top';
  style?: StyleProp<ViewStyle>;
  rounded?: boolean;
};

export default function Button({
  title,
  onPress,
  disabled = false,
  variant,
  buttonType = 'default',
  icon,
  iconPosition = 'left',
  style,
  rounded = false,
}: ButtonProps) {
  // Default variant applies only to default buttons
  const activeVariant: ButtonVariant =
    variant ?? (buttonType === 'default' ? 'filled' : 'filled');

  const isOutlined = activeVariant.toLowerCase().includes('outlined');
  const roundedClass = rounded ? 'rounded-full' : 'rounded-[5px]';

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
    softOutlined: ButtonStyle.btnSoftTextOutlined,
    success: ButtonStyle.btnTextSuccess,
    successOutlined: ButtonStyle.btnTextSuccessOutlined,
    danger: ButtonStyle.btnTextDanger,
    dangerOutlined: ButtonStyle.btnTextDangerOutlined,
    warning: ButtonStyle.btnTextWarning,
    warningOutlined: ButtonStyle.btnTextWarningOutlined,
    info: ButtonStyle.btnTextInfo,
    infoOutlined: ButtonStyle.btnTextInfoOutlined,
    BackButton: ButtonStyle.btnTextBackButton,
    BackButtonOutlined: ButtonStyle.btnTextBackButtonOutlined,
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
      ? `${ButtonStyle.iconButton} ${buttonClass} ${roundedClass}`
      : `${ButtonStyle.iconButton} ${roundedClass}`
    : buttonType === 'iconText'
    ? `${ButtonStyle.btnBase} ${buttonClass} ${roundedClass}`
    : `${ButtonStyle.btnBase} ${buttonClass} ${roundedClass}`;

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
        <View
          className={`
        ${
          iconPosition === 'top'
            ? 'flex-col items-center justify-center gap-[10px]'
            : ButtonStyle.btnContentBase
        }
        `}
        >
          {iconPosition === 'left' && renderIcon()}
          {iconPosition === 'top' && renderIcon()}
          {title && (
            <Text className={`${ButtonStyle.btnTextBase} ${textClass}`}>
              {title}
            </Text>
          )}

          {iconPosition === 'right' && renderIcon()}
        </View>
      )}

      {buttonType === 'default' && title && (
        <Text className={textClass}>{title}</Text>
      )}
      {isPlainText && (
        <View className={ButtonStyle.btnContentBase}>
          {iconPosition === 'left' && renderIcon()}

          {title && <Text className={ButtonStyle.plainText}>{title}</Text>}

          {iconPosition === 'right' && renderIcon()}
        </View>
      )}
    </TouchableOpacity>
  );
}

// Component for styling buttons in the application
export const ButtonStyle = {
  // Base
  btnBase: 'border py-[8px] px-[20px] items-center justify-center',

  btnTextBase: 'text14BWhite',

  // Button backgrounds
  filled: 'bg-brandBlue border-brandBlue',
  outlined: 'bg-transparent border-lightGray',
  softOutlined: 'bg-brandLightGray border-brandLightGray',

  success: 'bg-brandTeal border-brandTeal',
  successOutlined: 'bg-transparent border-brandTeal',

  danger: 'bg-brandRed border-brandRed',
  dangerOutlined: 'bg-transparent border-brandRed',

  warning: 'bg-amber-500 border-amber-500',
  warningOutlined: 'bg-transparent border-amber-500',

  info: 'bg-sky-600 border-sky-600',
  infoOutlined: 'bg-transparent border-sky-600',

  BackButton:
    'bg-brandLightGray border-brandLightGray p-[10px] items-center justify-center',
  BackButtonOutlined: 'bg-transparent border-brandLightGray',

  // Disabled
  disabled: 'bg-gray-400 border-gray-400',
  disabledOutlined: 'bg-transparent border-gray-400',

  // Text variants
  btnTextFilled: 'text14BWhite',
  btnTextOutlined: 'text14BBrandDarkBlue',
  btnSoftTextOutlined: 'text14BBrandBlue',

  btnTextSuccess: 'text14BBrandTealBase',
  btnTextSuccessOutlined: 'text14BBrandTealBase',

  btnTextDanger: 'text20RWhite',
  btnTextDangerOutlined: 'text20RRed',

  btnTextWarning: 'text20RWhite',
  btnTextWarningOutlined: 'text20RWarning',

  btnTextInfo: 'text20RWhite',
  btnTextInfoOutlined: 'text20RInfo',

  btnTextDisabled: 'text20RWhite',
  btnTextDisabledOutlined: 'text20RDarkGray',

  btnTextBackButton: 'text20RWhite',
  btnTextBackButtonOutlined: 'text20RBrandLightGray',

  // Icon button
  iconButton: 'self-start p-[10px] items-center justify-center',

  // Content layout
  btnContentBase: 'flex-row items-center gap-[10px]',
  textButton: 'items-center justify-center',
  plainText: 'text14BBrandBlue',
};
