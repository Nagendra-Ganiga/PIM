// ModalWrapper Features
// - Reusable React Native component for displaying customizable modal dialogs.
// - Supports custom trigger elements, such as buttons and icons.
// - Provides a default trigger button when no custom trigger is supplied.
// - Supports dynamic modal alignment: top, bottom, center, and full screen.
// - Supports an optional modal title and close icon.
// - Allows custom body content through the children prop.
// - Supports custom footer actions, such as Cancel and Confirm buttons.
// - Provides background blur using BlurView.
// - Supports configurable animations: fade, slide, and none.
// - Supports transparent modal backgrounds.
// - Includes an onClose callback when the modal is dismissed.

import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { Images } from '../../../assets/images/Images';
import { BlurView } from '@react-native-community/blur';
import ButtonsWrapper from '../Button/ButtonsWrapper';

type ModalWrapperProps = {
  modalTitle?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  trigger?: React.ReactNode;
  modalfooter?: (closeModal: () => void) => React.ReactNode;
  pressableText?: string;
  animationType?: 'slide' | 'fade' | 'none';
  transparent?: boolean;
  closeIcon?: boolean;
  modalAlign?: 'top' | 'bottom' | 'center' | 'full';
};

export default function ModalWrapper({
  modalTitle,
  children,
  onClose,
  modalfooter,
  trigger,
  pressableText,
  animationType = 'fade',
  transparent = true,
  closeIcon = false,
  modalAlign = 'center',
}: ModalWrapperProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
    onClose?.();
  };

  const handleOpen = () => {
    setModalVisible(true);
  };

  const modalAlignment = {
    top: 'top-[10%]',
    bottom: 'bottom-[10%]',
    center: 'top-[50%] left-[10%] translate-y-[-50%]',
    full: 'top-0 left-0 h-full w-full rounded-none p-[40px] justify-between',
  }[modalAlign];

  return (
    <>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.overlay}>
          {/* Full-screen background blur */}
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.13)"
          />

          {/* Modal container */}
          <View className={[ModalStyle.modalBox, modalAlignment].join(' ')}>
            {/* Modal header */}
            <View className={ModalStyle.modalHeader}>
              {modalTitle && (
                <Text className={ModalStyle.modalTitle}>{modalTitle}</Text>
              )}

              {closeIcon && (
                <Pressable
                  onPress={handleClose}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel="Close modal"
                >
                  <Images.BlackCloseIcon width={20} height={20} />
                </Pressable>
              )}
            </View>

            {/* Modal body */}
            {children && (
              <View className={ModalStyle.modalBody}>{children}</View>
            )}

            {/* Custom footer */}
            {modalfooter && (
              <View className={ModalStyle.modalFooter}>
                {modalfooter(handleClose)}
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Trigger button */}
      {trigger ? (
        <Pressable onPress={handleOpen}>{trigger}</Pressable>
      ) : (
        <ButtonsWrapper
          variant="info"
          title={pressableText || 'Show Modal'}
          onPress={handleOpen}
        />
      )}
    </>
  );
}

// Component for styling Modal in the application
export const ModalStyle = {
  modalBox: 'bg-white p-[10px] rounded-lg w-[80%] flex-col gap-4 absolute  ',
  modalHeader: 'flex-row items-center justify-between ',
  modalTitle: 'text20RBlack ',
  modalBody: 'text16RBlack',
  modalFooter: '',
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
