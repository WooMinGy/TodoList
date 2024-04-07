import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SystemBars } from 'react-native-bars';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { ScrollProvider } from './scroll';
import { StacksProvider } from './stacks';

export * from './scroll';

export type IUIContext = {};

export type UIProviderProps = {
  children: ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={{ flex: 1 }}>
      <StacksProvider>
        <ScrollProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled={Platform.OS === 'ios'}
            >
              <SystemBars animated={true} barStyle="light-content" />
              {children}
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ScrollProvider>
      </StacksProvider>
    </SafeAreaProvider>
  );
};
