import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import { useLazyFetchFoldersQuery } from '@/Services/modules/folder'
import GorgeousHeader from "react-native-gorgeous-header";

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Windows } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchFolders, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchFoldersQuery()

  useEffect(() => {
    fetchFolders(userId)
    console.log(Windows.top-8)
  }, [fetchFolders, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={[Layout.fill,{paddingTop: Windows.top, paddingBottom: Windows.bottom}]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
       <GorgeousHeader
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
       />
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: data.name })}
          </Text>
        )}
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={setUserId}
          editable={!isLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Auto</Text>
      </TouchableOpacity>

      <TouchableOpacity
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
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ExampleContainer
