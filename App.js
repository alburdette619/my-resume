import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import Header from './src/components/header';
import MainContent from './src/components/mainContent';

const { height, width } = Dimensions.get('window');

const App = () => {
  StatusBar.setHidden(true);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.33, width }}>
        <Header />
      </View>
      <View style={{ flex: 1 }}>
        <MainContent />
      </View>
    </View>
  );
};

export default App;
