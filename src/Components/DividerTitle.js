import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const DividerTitle = ({title,titleRight,onPress}) => {
  const {Fonts} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[Fonts.titleX]}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>{titleRight}</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default DividerTitle

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:18
    }
})