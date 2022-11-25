import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileHeader from "react-native-profile-header";
import { useState } from 'react'
import SearchBar from "react-native-dynamic-search-bar";

const StandartHeader = ({title, profileImageSource, disableSearch = false, disableNotifications= false, disableLeftButton = true, leftButtonAction }) => {
    const [showSearch, setShowSearch] = useState(false)
  return (
   <>
    <ProfileHeader
        titleText={title}
        disableLeftAlignedButton ={disableLeftButton}
        onLeftButtonPress ={leftButtonAction}
        disableSecondIcon
        disableFirstIcon = {disableSearch}
        disableThirdIcon = {disableNotifications}
        height={80}
        style={[ !showSearch && {elevation:10, borderBottomEndRadius: 35}] }
        onFirstIconPress={() => setShowSearch(!showSearch)}
        profileImageSource={profileImageSource}
      />

      {
        showSearch && (
          <View style={{overflow:'hidden', paddingBottom:10}}>
          <View style={{
            elevation: 10,
            borderBottomEndRadius: 35,
            shadowOffset: {
              width: 1, height: 1
            },
            shadowOpacity: 0.4,
            backgroundColor: 'white',
            shadowRadius: 3
          }}>
            <SearchBar
              onClearPress={() => setShowSearch(!showSearch)}
              style={{ marginTop: 15, marginBottom:15, elevation:5 }} />
          </View>
          </View>

        )
      }
   </>
  )
}

export default StandartHeader

const styles = StyleSheet.create({})