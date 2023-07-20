import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
};

export const Button = ({ onPress, text, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.3 : 1 }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
