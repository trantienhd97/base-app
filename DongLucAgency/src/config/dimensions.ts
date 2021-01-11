import {Dimensions, KeyboardAvoidingViewProps} from 'react-native';
import {PLATFORM_IS_IOS} from 'src/config/platform';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export {SCREEN_WIDTH, SCREEN_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH};

export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] = PLATFORM_IS_IOS
  ? 'padding'
  : 'height';
