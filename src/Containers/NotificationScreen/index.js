import { RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import CustomHeader from '@/Components/CustomHeader'
import Icon from 'react-native-vector-icons/Entypo';
import { notification } from '@/Mock/Data'
import NotificationContainer from '@/Components/NotificationContainer'
import { FlatList } from 'react-native-gesture-handler'
import { Colors } from '@/Theme/Variables'

import Container from '@/Components/Container'
import { DefaultView, StandartHeader } from '@/Components'
import ProfileHeader from "react-native-profile-header";
import { useState } from 'react'
import SearchBar from "react-native-dynamic-search-bar";
import { useLazyFetchFoldersQuery } from '@/Services/modules/folder'
import { useEffect } from 'react'
import { useLazyFetchNotificationsQuery } from '@/Services/modules/notification'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { navigate } from '@/Navigators/utils'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { Screen } from '@/Common/Constants'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const NotificationScreen = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Images, DefaultVariables } = useTheme()
  const [showSearch, setShowSearch] = useState(false)
 
  const buttonAction = (item) => {
    navigate(Screen.DOCUMENT_VIEW_SCREEN,{item})
  }

  const [fetchNotifications, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchNotificationsQuery()

  useEffect(() => {

    fetchNotifications()

  }, [])

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log("first")

    setRefreshing(true);
    fetchNotifications()
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <DefaultView>

   <StandartHeader title={'Natifications'} profileImageSource={Images.document_tick} />

      <View style={{ marginHorizontal: 15, flex: 1, marginBottom: 2 }}>
        {
          refreshing || isLoading ? (
            <SkypeIndicator size={50} />
          ) :
            (

              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                renderItem={({ item }) => (
                  <View style={{ marginTop: 15, }}>
                    <NotificationContainer item={item} action={buttonAction} />
                    
                  </View>
                )}
                keyExtractor={item => item.id}
              />

            )
        }

      </View>
    </DefaultView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f7ff',

  }
})