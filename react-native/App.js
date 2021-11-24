import React from 'react';
import { StyleSheet, Text, SafeAreaView,  } from 'react-native';
import { RandomNumber, MyCV } from './src/pages';

export default function App() {
  const PageCV = true;
  return (
      // <SafeAreaView style={styled.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </SafeAreaView>
      <MyCV />
  );
  }

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
