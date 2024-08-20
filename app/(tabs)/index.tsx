
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View style={styles.me}>
         <Text style={styles.text}>I'm Jakhongir</Text>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  me: {
    backgroundColor: '#222',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});