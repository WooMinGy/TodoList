import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';

import { RootStackParamList } from '../root.stack';

import { PrimaryDetailScreen } from './primary-detail';
import { PrimaryMainScreen } from './primary-main';

export type PrimaryStackParamList = {
  PrimaryMainScreen: {};
  PrimaryDetailScreen: {
    id: number;
  };
};

export type PrimaryStackNavigationProp = StackNavigationProp<RootStackParamList, 'PrimaryStack'>;

type PrimaryStackRouteProp = RouteProp<RootStackParamList, 'PrimaryStack'>;

const Stack = createStackNavigator<PrimaryStackParamList>();

export type IPrimaryStackProps = {
  navigation: PrimaryStackNavigationProp;
  route: PrimaryStackRouteProp;
};

export const PrimaryStack: FC<IPrimaryStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PrimaryMainScreen" component={PrimaryMainScreen} />
      <Stack.Screen name="PrimaryDetailScreen" component={PrimaryDetailScreen} />
    </Stack.Navigator>
  );
};
