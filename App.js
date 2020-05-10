import React from 'react';
import { Button, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Button title='Fixing stuff' onPress={() => alert('is it fixed yet?')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
