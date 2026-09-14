import { View, Text, StyleSheet } from 'react-native';

export default function CardInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Card Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
