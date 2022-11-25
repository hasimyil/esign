import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text, ImageBackground, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';


const StartupContainer = () => {
  const { Layout, Gutters, Fonts,Images, Windows } = useTheme()
  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
   
      <ImageBackground source={Images.background_1} style={[{width: Windows.width, height: Windows.height,  paddingTop: Windows.top + 8},Layout.fill, Layout.colCenter]}>
        <SkypeIndicator size={50} />
        <Text style={Fonts.textCenter}>{t('welcome')}</Text>
      
      </ImageBackground>
  )
}

export default StartupContainer
