import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/Theme/Variables';
import { useTheme } from '@/Hooks';
const DefaultView = (props) => {
  const {Layout,Common,Windows} = useTheme()
  return (
    <View style={[Layout.fill, props.style && props.style]} >
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Common.backgroundPrimary.backgroundColor} translucent = {true}/>
     {props.children}
    </View>
  )
}

export default DefaultView

const styles = StyleSheet.create({})