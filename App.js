
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    
    <WebView 
      style={styles.container}
      source={{ uri: 'https://casautodev.wpengine.com/' }}
      containerStyle={{
        width: '100%',
        height: 500,
        marginTop:50,
        backgroundColor: "white",
        flex: 1,
    }}
    />
    
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
