import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const sizes = {
  small: width < 320 ? 6 : width < 480 ? 8 : width < 768 ? 12 : 16,
  medium: width < 320 ? 8 : width < 480 ? 12 : width < 768 ? 16 : 20,
  large: width < 320 ? 12 : width < 480 ? 16 : width < 768 ? 20 : 24,
  extraLarge: width < 320 ? 16 : width < 480 ? 24 : width < 768 ? 36 : 48,
  superLarge: width < 320 ? 24 : width < 480 ? 36 : width < 768 ? 48 : 64,
};
