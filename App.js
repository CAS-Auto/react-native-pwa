
import React, {useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [isLoading, setLoading] = useState(false);
  return (
    <View style={{flex:1}}>

      <WebView 
        style={styles.container}
        source={{ uri: 'https://casautodev.wpengine.com/' }}
        containerStyle={{
          width: '100%',
          height: 500,
          marginTop:20,
          backgroundColor: "white",
          flex: 1,
      }}
      startInLoadingState={true}
      onLoadStart={(syntheticEvent) => {
        setLoading(true);
      }}
      onLoadEnd={(syntheticEvent) => {
        setLoading(false);
      }}
    
      
      
      />
       {isLoading && (
          <View style={{flex: 10, backgroundColor: 'white', justifyContent:"center"}}>
            <ActivityIndicator
              color="#black"
              size="large"
            
            />
          </View>
        )}
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
