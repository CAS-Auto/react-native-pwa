
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView,Dimensions, RefreshControl, Linking} from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function App({ isRefresh, onRefresh, ...webViewProps }) {
  const [isLoading, setLoading] = useState(false);
  const [height, setHeight] = useState(Dimensions.get('screen').height);
  const [isEnabled, setEnabled] = useState(typeof onRefresh === 'function');
  
  const LoadingIndicatorView = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="black" size="large" />
      </View>
    )

  }
  return (
    <SafeAreaView style={styles.containerSafe}>
    <ScrollView contentContainerStyle={styles.container} 
    onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
    refreshControl={
      <RefreshControl
        onRefresh={onRefresh}
        refreshing={isRefresh}
        enabled={isEnabled}
      />
    }
    >

      <WebView
       onScroll={(e) =>
          setEnabled(
            typeof onRefresh === 'function' &&
              e.nativeEvent.contentOffset.y === 0
          )
       }
        style={{ flex: 1 }}
        source={{ uri: 'https://casautodev.wpengine.com/' }}
        containerStyle={{
          width: '100%',
          height,

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
       
    </ScrollView>
    </SafeAreaView>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  containerSafe:{
    flex:1
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor:'white'
  },
 

});
