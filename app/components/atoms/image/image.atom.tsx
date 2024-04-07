// import FastImage from 'react-native-fast-image';
import { Image as NativeImage, ImageSourcePropType, ImageStyle } from 'react-native';

interface CustomImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

export const Image = ({ ...props }: CustomImageProps) => {
  return <NativeImage {...props} />;
};
