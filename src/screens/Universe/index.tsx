import { View, Text, StyleSheet } from 'react-native';

export default function UniverseScreen() {
  return (
    <View style={styles.container}>
      <Text>Universe Screen</Text>
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
