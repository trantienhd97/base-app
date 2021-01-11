import React, {FC, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import './LoginNavigator.scss';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from 'src/screens/TestScreen/TestScreen';

/**
 * File: LoginNavigator.tsx
 * @created 2021-01-11 15:13:40
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<LoginNavigatorProps>>}
 */

const {Navigator, Screen} = createStackNavigator();

const LoginNavigator: FC = (): ReactElement => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName={nameof(TestScreen)}
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <Screen
        name={nameof(TestScreen)}
        component={TestScreen}
        initialParams={{}}
      />
    </Navigator>
  );
};

export interface LoginNavigatorProps {
  //
}

LoginNavigator.defaultProps = {
  //
};

LoginNavigator.propTypes = {
  //
};

LoginNavigator.displayName = nameof(LoginNavigator);

export default React.memo(LoginNavigator);
