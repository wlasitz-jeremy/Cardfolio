import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type PrimaryButtonProps = TouchableOpacityProps & {
  label: string;
};

export default function PrimaryButton({ label, style, ...props }: PrimaryButtonProps) {
  return (
    <TouchableOpacity {...props} activeOpacity={props.activeOpacity ?? 0.9} style={[styles.button, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 58,
    justifyContent: 'center',
  },
  label: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
