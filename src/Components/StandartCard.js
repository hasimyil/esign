import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks';
import Icon from 'react-native-vector-icons/Entypo'
import { Colors } from '@/Theme/Variables';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StandartCard = ({title, create_at, read, action}) => {
 
    const {Fonts, Layout, Images, Common} = useTheme();
  return (
    <View style={[styles.card,read && {opacity:0.6}, ]}>
        <View style={styles.imageContainer}>
                <Image style={styles.image} source={Images.document_tick} />
        </View>
    <View style={styles.cardContent}>
        <Text style={styles.name}>{title ? title : 'test'} asdasdasdasd asda sdas</Text>
        <Text style={styles.count}>{create_at ? create_at : '3 days'}asdasd</Text>
        <TouchableOpacity style={styles.followButton} onPress={()=>action(title)}>
            <Text style={styles.followButtonText}>View Document</Text>  
        </TouchableOpacity>
    </View>
  </View>
  )
}

export default StandartCard

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#ebf0f7",
      elevation:5
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
      shadowColor: '#00000099',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.4,
      elevation: 5,
      backgroundColor:'#fcbf',
      padding: 10,
      flexDirection:'row',
      borderRadius:30,
    },
  
    name:{
      color:"#3399ff",
      fontWeight:'bold',
      padding:3,
    },
    count:{
      fontSize:14,
      marginLeft:5,
      alignSelf:'flex-start',
      color:"#6666ff"
    },
    followButton: {
      marginTop:10,
      height:35,
      padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'flex-end',
      borderRadius:30,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: Colors.success,
      fontSize:12,
    },
  }); 