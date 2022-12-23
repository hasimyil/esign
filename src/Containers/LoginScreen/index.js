import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import DividerTitle from '@/Components/DividerTitle'
import { useTranslation } from 'react-i18next'
import TextInput from "react-native-text-input-interactive";
import { userLogin } from '@/Redux/User/authActions'
import { useDispatch, useSelector } from 'react-redux'
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
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useEffect } from 'react'
const LoginScreen = () => {
    const { Fonts, Images, Layout, Common, Windows } = useTheme()
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { loading, userToken, userInfo, isLoggedIn,error } = useSelector((state) => state.user)
    const submitForm = () => {
        dispatch(userLogin({ username, password }))
    }
    useEffect(() => {
      console.log("LOGGED IN")
      if(isLoggedIn){
        navigateAndSimpleReset("Main")
      }
      return () => {
        
      }
    }, [isLoggedIn])
    
    return (
        <View style={[{ backgroundColor: 'white', flex: 1 }]}>
            <View style={styles.header}>
                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Image source={Images.logo} style={styles.logo} resizeMode={'contain'} />
                </View>
                <View style={{ flex: 0.5, alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                    <Image source={Images.signInImage} resizeMode={'contain'} />
                </View>

            </View>
            <View style={{ padding: 15 }}>
                <Text style={Fonts.titleXXL}>{t('login.welcome')}</Text>
                <Text style={Fonts.textRegular}>to {t('app_name')}</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder="Username"
                    enableIcon
                    onChangeText={setUsername}
                    autoCapitalize={false}
                    textInputStyle={{
                        marginBottom: 15
                    }}
                    onIconPress={() => { }}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry
                    enableIcon
                    textInputStyle={{
                        marginBottom: 15
                    }}
                    onIconPress={() => { }}
                />
                {
                    loading ?
                        (
                            (<SkypeIndicator size={50} />)
                        )
                        :
                        (
                            <TouchableOpacity onPress={submitForm}
                            style={{
                                backgroundColor:'blue',
                                width:150,
                                height:50,
                                borderRadius:50,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={[Fonts.titleX,{color:'white'}]}>Login</Text>
                            </TouchableOpacity>
                          
                        )
                }

                <Text>{error}</Text>

            </View>





        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100
    },
    signImage: {
        width: '35%',
        height: '35%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        marginBottom: 16,
        marginTop: 20,
        alignItems: 'center'
    },
})