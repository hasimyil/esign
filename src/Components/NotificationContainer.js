import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks';
import Icon from 'react-native-vector-icons/Entypo'
import { Colors } from '@/Theme/Variables';
import RNBounceable from "@freakycoder/react-native-bounceable";

const NotificationContainer = (props) => {
    const {title, create_at, read} = props.item;
    const {action} = props;
    const {Fonts, Layout, Images} = useTheme();
  return (
    <View style={[styles.card,read && {opacity:0.6}]}>
        <View style={styles.imageContainer}>
                <Image style={styles.image} source={Images.document_tick} />
        </View>
    <View style={styles.cardContent}>
        <Text style={styles.name}>{title ? title : 'test'} has sign the document</Text>
        <Text style={styles.count}>{create_at ? create_at : '3 days'}</Text>
        <RNBounceable style={styles.followButton} onPress={()=>action(props.item)}>
            <Text style={styles.followButtonText}>View Document</Text>  
        </RNBounceable>
    </View>
  </View>
  )
}

export default NotificationContainer

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#ebf0f7"
    },
    cardContent: {
        width:'80%',
    },
    imageContainer:{
      width:'20%',
    },
    image:{
        width:70,
        height:70,
        borderRadius:45,
        borderWidth:2,
        borderColor:"#ebf0f7",
        alignItems:'center',
        justifyContent:'center'
    },  
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 2,
      backgroundColor:"white",
      padding: 10,
      flexDirection:'row',
      borderRadius:15,
    },
  
    name:{
     // color:"#3399ff",
      fontWeight:'bold',
      padding:3
    },
    count:{
      fontSize:14,
      marginLeft:5,
      alignSelf:'flex-start',
     // color:"#6666ff"
    },
    followButton: {
      marginTop:10,
      height:35,
      padding:10,
      backgroundColor:'red',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'flex-end',
      borderRadius:5,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: Colors.success,
      fontSize:12
    },
  }); 