import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ModalProvider } from 'react-native-modalfy';
import { Provider } from 'react-redux';

import { UIProvider } from '@/components';
import { RootStack } from '@/screens';

import { MMKVProvider } from './providers';
import store from './redux/store';
import { modalStack } from './screens/modal';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <UIProvider>
          <MMKVProvider>
            <Provider store={store}>
              <ModalProvider stack={modalStack}>
                <RootStack />
              </ModalProvider>
            </Provider>
          </MMKVProvider>
        </UIProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
