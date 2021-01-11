import {Platform} from 'react-native';
import {getModel} from 'react-native-device-info';

export const PLATFORM_IS_IOS: boolean = Platform.OS === 'ios';

export const PLATFORM_IS_ANDROID: boolean = Platform.OS === 'android';

export const DEVICE_MODEL: string = getModel();

export const PLATFORM_NAME: string = Platform.OS === 'ios' ? 'iOS' : 'Android';
