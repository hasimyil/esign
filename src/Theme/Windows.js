
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
 import { useWindowDimensions } from 'react-native';
 import { useSafeAreaInsets } from 'react-native-safe-area-context';
 export default function () {
  const { top, bottom } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  return { width, height, top, bottom };
};
