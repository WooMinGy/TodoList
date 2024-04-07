import { spacing, useScroll } from '@/components';
import { ComponentProps, FC, MutableRefObject } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { wrapScrollViewConfigured } from 'react-native-scroll-into-view';
import { FullOptions } from 'react-native-scroll-into-view/build/config';

export type IScrollViewProps = Omit<ComponentProps<typeof KeyboardAwareScrollView>, 'innerRef'> & {
  scrollIntoViewOptions?: Partial<FullOptions>;
  scrollEventThrottle?: number;
  contentOffset?: number;
  innerRef?: MutableRefObject<RNScrollView>;
};

const NativeScrollView = wrapScrollViewConfigured({
  refPropName: 'innerRef',
})((props) => <KeyboardAwareScrollView contentInset={{ top: 0 }} {...props} />);

export const ScrollView: FC<IScrollViewProps> = ({
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  keyboardShouldPersistTaps = 'handled',
  scrollEnabled: independentScrollEnabled = true,
  ...props
}) => {
  const { scrollEnabledState } = useScroll();

  return (
    <NativeScrollView
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={scrollEnabledState ?? independentScrollEnabled}
      enableAutomaticScroll
      resetScrollToCoords={{ x: 0, y: 0 }}
      fadingEdgeLength={spacing['10-x']}
      {...props}
    />
  );
};
