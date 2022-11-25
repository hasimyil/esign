import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const CustomHeader = ({right,center,left, style}) => {
    const {Fonts, Layout, Windows} = useTheme();
  return (
    <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, styles.container, style && style]}>
        <View style={styles.subLeftContainer}>
            {left}
        </View>
        <View style={styles.center}>
            {center}
        </View>
        <View style={styles.subRightContainer}>
            {right}
        </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container:{
       height:'15%',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        backgroundColor:'white',
        justifyContent:'center',
       // elevation:5,
    },
    center :{
      width:'30%',
     
    },
    subLeftContainer:{
        marginStart:'5%',
        width:'25%'
    },
    subRightContainer:{
        marginEnd:'5%',
        alignItems:'flex-end',
        width:'25%'
    }
})