import {StyleProp, StyleSheet} from 'react-native';
import {Colors} from 'src/styles/colors';
import {SCREEN_WIDTH} from 'src/config/dimensions';

export const commonStyles: Record<string, StyleProp<any>> = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    backgroundColor: Colors.Primary,
  },
  banner: {
    width: SCREEN_WIDTH - 32,
    height: ((SCREEN_WIDTH - 32) / 343) * 206,
  },
});
