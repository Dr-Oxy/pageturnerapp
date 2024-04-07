import React from 'react';
import {Text, View, TextInput} from 'react-native';

import {styles} from './formItem';

interface FormItemProps {
  label: string;
  error?: boolean | {message?: string};
  errorMessage?: string;
  placeholder: string;
  disabled?: boolean | undefined;
  value: string; // Optional for controlled input
  onBlur: any;
  onChange: any;
}

const FormItem = React.forwardRef(function FormItem(
  {
    onChange,
    onBlur,
    label,
    error,
    value,
    errorMessage,
    placeholder,
    disabled,
    ...props
  }: FormItemProps,
  ref?: React.LegacyRef<TextInput> | undefined,
) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        placeholderTextColor="white"
        ref={ref} // Forward the ref to the underlying TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={styles.normalInput} // Assuming normal style for now
        placeholder={placeholder}
        editable={disabled}
        {...props}
      />

      {error && (
        <View>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
});

export default FormItem;
