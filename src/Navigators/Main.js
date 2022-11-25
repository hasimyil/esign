import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, NotificationScreen, ProfileScreen } from '@/Containers'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from '@/Hooks'
import { Screen } from '@/Common/Constants';
import DocumentScreen from '@/Containers/DocumentScreen';


const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Layout, Images } = useTheme()
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   let iconColor;
        //   let addButtonStyle = {};

        //   if (route.name === Screen.HOME_SCREEN) {
        //       iconName = 'home';
        //       if(focused){
        //          iconColor= "tomato"
        //       }else{
        //           iconColor= "gray"
        //       }

        //   } else if (route.name === Screen.NOTIFICATION_SCREEN) {
        //       iconName = 'notification';
        //       if(focused){
        //          iconColor= "tomato"
        //       }else{
        //           iconColor= "gray"
        //       }
        //   } else if (route.name === Screen.PROFILE_SCREEN) {
        //       iconName = 'profile';
        //       if(focused){
        //          iconColor= "tomato"
        //       }else{
        //           iconColor= "gray"
        //       }
        //   } else if (route.name === 'newDocument') {
        //       iconName = 'add_document';
        //       if(focused){
        //         // iconColor= "tomato"
        //          addButtonStyle = styles.buttonEar
        //       }else{
        //          //iconColor= "gray"
        //           addButtonStyle = styles.buttonEarInactive
        //       }
        //   }else if (route.name === 'test') {
        //       iconName = 'page';
        //       if(focused){
        //          iconColor= "tomato"
        //       }else{
        //           iconColor= "gray"
        //       }
        //   }

        //   // You can return any component that you like here!
        //   return  (<View>
        //     <Text>asdas</Text>
        //   </View>);
        // },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        //tabBarStyle:{ borderTopLeftRadius:30, borderTopRightRadius:30}

      })}

    >
      <Tab.Screen
        name={Screen.HOME_SCREEN}
        component={ExampleContainer}
        options={{
          // tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color, size }) => (
            <View >
              <Icon name="home" color={color} size={size} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Screen.DOCUMENT_SCREEN}
        component={DocumentScreen}
        options={{
          // tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="text-document" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Screen.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          // tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Screen.PROFILE_SCREEN}
        component={ProfileScreen}
        // options={{
        //  // tabBarLabelPosition: 'beside-icon',
        //   tabBarIcon:  ({ color, size }) => (
        //     <View style={{backgroundColor:"white", 
        //     justifyContent:'center', alignItems:'center',
        //     marginTop:-35 ,width:60, height:60,
        //     borderWidth:1,
        //     borderColor:color,
        //      borderRadius:99}}>
        //       <Image source={Images.document_tick} style={{width:'100%', height:'100%'}} resizeMode={'contain'} />
        //     </View>
        //   ),
        // }}
        options={{
          // tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />


    </Tab.Navigator>
  )
}

export default MainNavigator
