import {name as appName} from 'package.json';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import AppEntry from 'src/AppEntry';
import {activateKeepAwake} from 'expo-keep-awake';
import addReactNDevTools from 'reactn-devtools';

enableScreens();

if (__DEV__) {
  addReactNDevTools();
  activateKeepAwake();
}

AppRegistry.registerComponent(appName, () => {
  return AppEntry;
});
