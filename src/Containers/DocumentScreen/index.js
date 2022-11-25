import { FlatList, ImageBackground, RefreshControl, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/Components/Container'
import CustomHeader from '@/Components/CustomHeader'
import { useTheme } from '@/Hooks'
import DividerTitle from '@/Components/DividerTitle'
import { useTranslation } from 'react-i18next'
import { folders } from '@/Mock/Data'
import { useLazyFetchFoldersQuery } from '@/Services/modules/folder'
import { useEffect } from 'react'
import NotificationContainer from '@/Components/NotificationContainer'
import StandartCard from '@/Components/StandartCard'
import DefaultView from '@/Components/DefaultView'
import ProfileHeader from "react-native-profile-header";
import { ScrollView } from 'react-native-gesture-handler';
import RNBounceable from "@freakycoder/react-native-bounceable";
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
import { useState } from 'react'
import SearchBar from "react-native-dynamic-search-bar";
import { StandartHeader } from '@/Components'
const DocumentScreen = () => {
  const { Fonts, Images, Layout, Common, Windows } = useTheme()
  const { t } = useTranslation()
  const [showSearch, setShowSearch] = useState(false)

  const [fetchFolders, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchFoldersQuery()

  useEffect(() => {
    fetchFolders()
    console.log(Common.backgroundPrimary.backgroundColor)

  }, [])

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <DefaultView style={Common.backgroundPrimary}>
      {/* <GorgeousHeader
       title='Documents'
       showSearch={false}
       subtitle='You can list and view all of your documents and foldes'
       style={{marginBottom:15}}
       profileImageSource={Images.document_tick}
       /> */}
  <StandartHeader title={'Natifications'} profileImageSource={Images.document_tick} />
      <ScrollView style={{ marginTop: 10 }}>
        <DividerTitle title={t('document.folders')} titleRight={'+ ' + t('document.new_folder')} onPress={() => console.log("View ALL")} />
        {
          !isLoading && !isFetching && !isLoading && (
            <Text style={[ { marginTop: 5, marginHorizontal: 18 }]}>{t('document.total_folder', { number: data?.length })}</Text>
          )
        }
        {
          isFetching ?
            (<SkypeIndicator size={50} />)
            :
            (
              <View>
                {
                  !isFetching && (
                    <FlatList
                      data={data}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <RNBounceable>
                        <View style={{ marginTop: 15, height: 200 }}>
                          <ImageBackground source={Images.folder_1} style={{ height: 200, width: 200, marginRight: 16, marginLeft: 16, elevation: 2 }}>
                            <Text style={[Fonts.titleX, { marginTop: 45, marginHorizontal: 16, color: 'white', fontWeight: 'bold' }]}>{item.title}</Text>
                            <Text style={[Fonts.textSmall, { marginTop: 60, marginHorizontal: 16, color: 'white' }]}>{item.createdAt}</Text>
                          </ImageBackground>
                        </View>
                        </RNBounceable>
                      )}
                      keyExtractor={item => item.id}
                    />
                  )
                }
              </View>
            )
        }

        <DividerTitle title={t('last_modified_documents')} titleRight={'View All'} onPress={() => console.log("View ALL Documents")} />
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>
        <View style={{ margin: 15 }}>
          <StandartCard />
        </View>

      </ScrollView>
    </DefaultView>
  )
}

export default DocumentScreen

const styles = StyleSheet.create({})


{/* <ImageBackground  source={Images.media[item.img]} style={{height:150, width:150, marginRight:16, elevation:2}}>
<Text marginHorizontal={10} marginTop={35} status={"white"}>
  {item.title}
</Text>
<Text
  marginHorizontal={16}
  marginTop={40}
  category="s2-sb"
  status="white">
  {item.date}
</Text>

</ImageBackground> */}