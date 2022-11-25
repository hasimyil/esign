import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GorgeousHeader from "react-native-gorgeous-header";
import ProfileHeader from "react-native-profile-header";
import { useTheme } from '@/Hooks';
import { DefaultView, StandartHeader } from '@/Components';
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
const ProfileScreen = () => {
  const { Images, Layout, Windows } = useTheme()
  return (
    <DefaultView style={{}}>

      <ImageBackground source={Images.background_1}
        style={[{ width: Windows.width, height: Windows.height }, Layout.fill]}
      >
        <StandartHeader title={'Profile'} profileImageSource={Images.document_tick} disableSearch={true} />
        <View style={[{ alignItems: 'center', alignContent: 'center', flex: 0.9, justifyContent: 'center', alignSelf: 'center' }]}>
          <SkypeIndicator size={50} style={{ flex: 0.2 }} />
          <Text>Profile is loading</Text>
        </View>



      </ImageBackground>
    </DefaultView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})