import React, {FC, PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import './TestScreen.scss';
import {View, Text} from 'react-native';
import {atomicStyles} from 'src/styles';

/**
 * File: TestScreen.tsx
 * @created 2021-01-11 15:59:14
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TestScreenProps>>}
 */
const TestScreen: FC<PropsWithChildren<TestScreenProps>> = (
  props: PropsWithChildren<TestScreenProps>,
): ReactElement => {
  return (
    <View style={[atomicStyles.bgSecondary, {flex: 1}]}>
      <View style={{backgroundColor: 'red', height: 100, width: 100}}>
        <Text style={{color: 'white'}}>AAA</Text>
      </View>
    </View>
  );
};

export interface TestScreenProps {
  //
}

TestScreen.defaultProps = {
  //
};

TestScreen.propTypes = {
  //
};

TestScreen.displayName = nameof(TestScreen);

export default React.memo(TestScreen);
