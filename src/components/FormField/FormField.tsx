import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type FormFieldProps = TextInputProps & {
  label: string;
};

export default function FormField({ label, style, ...inputProps }: FormFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        placeholderTextColor={inputProps.placeholderTextColor ?? palette.secondaryText}
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 4,
  },
  label: {
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    color: palette.darkText,
    height: 52,
    paddingHorizontal: 12,
    fontFamily: fontFamilies.body,
  },
});
