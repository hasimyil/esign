/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleX: {
      fontSize: FontSize.x,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleXS: {
      fontSize: FontSize.xs,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleM: {
      fontSize: FontSize.m,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleL: {
      fontSize: FontSize.l,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleXL: {
      fontSize: FontSize.xl,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleXXL: {
      fontSize: FontSize.xxl,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
