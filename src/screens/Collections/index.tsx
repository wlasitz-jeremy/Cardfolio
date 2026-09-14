import { View, Text, StyleSheet } from 'react-native';

export default function CollectionsScreen() {
  return (
    <View style={styles.container}>
      <Text>Collections Screen</Text>
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
