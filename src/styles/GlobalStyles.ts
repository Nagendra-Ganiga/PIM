// Component for styling buttons in the application
export const ButtonStyle = {
  // Button base styles
  btnBase:
    'rounded-[5px] border py-[8px] px-[20px] items-center justify-center',
  btnTextBase: 'text-[20px] font-HeeboRegular',

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
  btnTextFilled: 'text-white',
  btnTextOutlined: 'text-brandBlue',

  btnTextSuccess: 'text-white',
  btnTextSuccessOutlined: 'text-green-600',

  btnTextDanger: 'text-white',
  btnTextDangerOutlined: 'text-red',

  btnTextWarning: 'text-white',
  btnTextWarningOutlined: 'text-amber-500',

  btnTextInfo: 'text-white',
  btnTextInfoOutlined: 'text-sky-600',

  btnTextDisabled: 'text-white',
  btnTextDisabledOutlined: 'text-gray-400',
};

// Component for styling InputText in the application
export const InputTextStyle = {
  inputBase:
    'w-full h-[56px] border rounded-[8px] text-black px-[20px] text-[20px] font-HeeboRegular',

  labelText: 'text-[16px] font-HeeboRegular mb-[5px] px-[5px]',
  labelDown:
    'absolute top-[50%] left-[20px] z-10 bg-white px-[5px] text-[20px] transform translate-y-[-50%]',
  labelUp: 'absolute top-[-8px] left-[15px] z-10 bg-white px-[5px] text-[14px]',

  inputShowHideIcon:
    'absolute right-[10px] top-[50%] w-[30px] h-[30px] transform translate-y-[-50%] flex-row items-center justify-center',
};

// Component for styling Modal in the application
export const ModalStyle = {
  modalBox: 'bg-white p-[10px] rounded-lg w-[80%] flex-col gap-4 absolute  ',
  modalHeader: 'flex-row items-center justify-between ',
  modalTitle: 'text-[20px] font-HeeboRegular ',
  modalBody: 'text-[16px] font-HeeboRegular',
  modalFooter: '',
};

// Component for styling CheckBox in the application
export const CheckboxStyle = {
  checkWrapper: 'flex-row items-center gap-[10px]',
  checkBox:
    'w-[20px] h-[20px] items-center justify-center rounded-[4px] border border-gray-400',
  checkedBox: 'bg-brandBlue border-brandBlue',
  checkLabel: 'text-[14px] text-black',
};

// Component for styling RadioBox in the application
export const RadioButtonStyle = {
  radioWrapper: 'flex-row items-center gap-[10px]',
  radioButton: 'items-center justify-center rounded-full border',
  selectedRadio: 'border-brandBlue bg-white',
  radioInner: 'bg-brandBlue',
  radioLabel: 'text14R text-black',
};
