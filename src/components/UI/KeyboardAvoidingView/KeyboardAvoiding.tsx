import React, { type ReactNode } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  type StyleProp,
  type ViewStyle,
  type ScrollViewProps,
  type KeyboardAvoidingViewProps,
} from 'react-native';

type KeyboardAvoidingWrapperProps = {
  children: ReactNode;

  behavior?: KeyboardAvoidingViewProps['behavior'];
  keyboardVerticalOffset?: number;

  enabled?: boolean;
  scrollEnabled?: boolean;
  showsVerticalScrollIndicator?: boolean;

  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;

  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
  extraScrollHeight?: number;
};

const KeyboardAvoidingWrapper = ({
  children,
  behavior = Platform.OS === 'ios' ? 'padding' : 'height',
  keyboardVerticalOffset = 0,
  enabled = true,
  scrollEnabled = true,
  showsVerticalScrollIndicator = false,
  contentContainerStyle,
  style,
  keyboardShouldPersistTaps = 'handled',
  extraScrollHeight = 0,
}: KeyboardAvoidingWrapperProps) => {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
      enabled={enabled}
    >
      {scrollEnabled ? (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[
            { flexGrow: 1, paddingBottom: extraScrollHeight },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
