import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome to RiskWatch App!</Text>
          {/* Add your app's components and navigation here */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
