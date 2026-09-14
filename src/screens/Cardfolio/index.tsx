import { View, Text, StyleSheet } from 'react-native';

export default function CardfolioScreen() {
  return (
    <View style={styles.container}>
      <Text>Cardfolio Screen</Text>
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
