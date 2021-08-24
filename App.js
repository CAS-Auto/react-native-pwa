
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [isLoading, setLoading] = useState(false);

  const LoadingIndicatorView = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="black" size="large" />
      </View>
    )

  }
  return (
    <SafeAreaView style={styles.container} >

      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://casautodev.wpengine.com/' }}
        containerStyle={{
          width: '100%',
          height: 500,

          backgroundColor: "white",
          flex: 1,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        renderLoading={isLoading ? LoadingIndicatorView : ''}
        startInLoadingState={true}
      />

      {isLoading && <LoadingIndicatorView />}

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }

});
