/**
 * @format
 */

import {FC} from 'react';
import React from 'reactn';
import {StatusBar} from 'react-native';
import nameof from 'ts-nameof.macro';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigation} from 'src/config/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = React.lazy(async () => {
  const AppComponent = await import('src/App');
  return AppComponent;
});

App.displayName = nameof(App);

/**
 * File: AppEntry.tsx
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC}
 */
const AppEntry: FC = () => {
  return (
    <NavigationContainer ref={navigation}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        animated={true}
        translucent={true}
      />
      <SafeAreaProvider>
        <React.Suspense fallback={null}>
          <App />
        </React.Suspense>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

AppEntry.displayName = nameof(AppEntry);

export default AppEntry;
