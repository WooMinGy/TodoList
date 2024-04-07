import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PrimaryStack, PrimaryStackParamList } from './primary';

export type RootStackParamList = {
  PrimaryStack: NavigatorScreenParams<PrimaryStackParamList>;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PrimaryStack" component={PrimaryStack} />
    </Stack.Navigator>
  );
};
