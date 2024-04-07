import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {MixedNavigation} from './src/navigations';
import {AppContextProvider} from './src/utils/appContext';

function App(): React.JSX.Element {
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <MixedNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContextProvider>
  );
}

export default App;
