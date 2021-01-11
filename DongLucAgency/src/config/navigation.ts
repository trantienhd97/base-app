import React, {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigation: RefObject<NavigationContainerRef> = React.createRef<NavigationContainerRef>();
