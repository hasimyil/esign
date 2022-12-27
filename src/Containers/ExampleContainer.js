import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import { useLazyFetchFoldersQuery } from '@/Services/modules/folder'
import GorgeousHeader from "react-native-gorgeous-header";
import { userLogin } from '@/Redux/User/authActions'
import moment from 'moment'
import { logout } from '@/Redux/User/authSlice'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { Button, Divider } from "@react-native-material/core";

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Windows } = useTheme()
  const dispatch = useDispatch()



  const { loading, userToken, userInfo } = useSelector((state) => state.user)


  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const logOut = () => {
  
    navigateAndSimpleReset('Startup')
    dispatch(logout())
  }


  return (
    <ScrollView
      style={[Layout.fill, { paddingTop: Windows.top, paddingBottom: Windows.bottom, backgroundColor: 'white' }]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >

      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {(loading) && <ActivityIndicator />}
        {loading ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            { userInfo && t('example.helloUser', { name: userInfo.name })}
          </Text>
        )}
      </View>


      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
        Last seen {!loading && userInfo &&  moment().fromNow(userInfo.lastSeen)}

      </Text>
      
      <Divider style={{ marginTop: 10 }} color={'black'} leadingInset={35} />

      <Button title="LogOut"  icon color="error" onPress={logOut}/>

      {/* <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Auto</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={[Common.button.outlineRounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: true })}
      >
        <Text style={Fonts.textRegular}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Common.button.outline, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: false })}
      >
        <Text style={Fonts.textRegular}>Light</Text>
      </TouchableOpacity> */}
    </ScrollView>
  )
}

export default ExampleContainer
