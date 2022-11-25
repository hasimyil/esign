import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/Theme/Variables';
import { useTheme } from '@/Hooks';
const Container = (props) => {
  const {Layout} = useTheme()
  return (
    <LinearGradient colors={['#ffff', '#ffff', '#e3effd' ]} style={Layout.fill}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.NavigationPrimary} translucent = {false}/>
     {props.children}
    </LinearGradient>
  )
}

export default Container

const styles = StyleSheet.create({})