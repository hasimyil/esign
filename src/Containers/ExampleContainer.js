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

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Windows } = useTheme()
  const dispatch = useDispatch()

  

    const { loading, userToken, userInfo } = useSelector((state) => state.user)
 

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  

  return (
    <ScrollView
      style={[Layout.fill,{paddingTop: Windows.top, paddingBottom: Windows.bottom, backgroundColor:'white'}]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
       {/* <GorgeousHeader
       title='Documents'
       showSearch={false}
       menuImageSource={{
        uri:
          "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      }}
       subtitle='You can list and view all of your documents and foldes'
       style={{marginBottom:15}}
       profileImageSource={{
        uri:
          "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      }}
       /> */}
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {(loading) && <ActivityIndicator />}
        {loading ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: userInfo.name  })}
          </Text>
        )}
      </View>

     
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
      Last seen {!loading && moment().fromNow(userInfo.lastSeen)}
       
      </Text>

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
