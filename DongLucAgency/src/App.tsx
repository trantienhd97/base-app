/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {FC} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import React from 'reactn';
import {KEYBOARD_AVOIDING_VIEW_BEHAVIOR} from 'src/config/dimensions';
import {atomicStyles} from 'src/styles';
import LoginNavigator from 'src/navigators/LoginNavigator/LoginNavigator';

const App: FC = () => {
  // const [user] = React.useGlobal<GlobalState, 'user'>('user');

  // const isAuthenticated: boolean = !!user;

  // appLocation.useLocationSubscription();

  // appPermissions.usePermissions(isAuthenticated);

  // appStateHandler.useAppState();

  // notificationService.useNotificationPermission();

  // notificationService.useNotificationSubscription();

  return (
    <KeyboardAvoidingView
      behavior={KEYBOARD_AVOIDING_VIEW_BEHAVIOR}
      style={[atomicStyles.wh100]}>
      {/*{user ? <AppNavigator /> : <LoginNavigator />}*/}
      <LoginNavigator />
    </KeyboardAvoidingView>
  );
};

export default React.memo(App);
