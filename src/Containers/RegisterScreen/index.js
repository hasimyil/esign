import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import DividerTitle from '@/Components/DividerTitle'
import { useTranslation } from 'react-i18next'
import TextInput from "react-native-text-input-interactive";
import { useDispatch, useSelector } from 'react-redux'
import {
    SkypeIndicator
} from 'react-native-indicators';
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { useEffect } from 'react'
import SuperAlert from "react-native-super-alert";
import AwesomeAlert from 'react-native-awesome-alerts';
import { resetError } from '@/Redux/User/authSlice'
import { Screen } from '@/Common/Constants'
import { userRegister } from '@/Redux/User/authActions'
import { logout } from '@/Redux/User/authSlice'
const RegisterScreen = () => {
    const { Fonts, Images, Layout, Common, Windows } = useTheme()
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { loading, userToken, userInfo, isLoggedIn, error,success } = useSelector((state) => state.user)
    const submitForm = () => {
        dispatch(userRegister({ username, password }))
    }
    const handleSuccess = () =>{
        navigateAndSimpleReset(Screen.LOGIN)
    }
    useEffect(() => {
        if (success) {
            dispatch(logout())
            alert(
                'Successfully!!', // This is a title
                "Your account created successfully!", // This is a alert message
                {
                    textConfirm: 'Login', // Label of button confirm
                    textCancel: 'Cancel', // Label of button cancel
                    onConfirm: () => handleSuccess(), // Call your confirm function 
                }
            )
        }
        return () => {

        }
    }, [success])

    useEffect(() => {
       
          if(error){
            alert(
                'Ops!',
                `${error}`,
               
              )
              dispatch(resetError());
          }
    
      return () => {
        
      }
    }, [error])
    

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
                <Text style={Fonts.textRegular}>{t('register.create_account')} for free!</Text>
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
                                    backgroundColor: 'blue',
                                    width: 150,
                                    height: 50,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={[Fonts.titleX, { color: 'white' }]}>Sign Up</Text>
                            </TouchableOpacity>

                        )
                }

                <SuperAlert customStyle={{
                      buttonConfirm: {
                        backgroundColor: '#e33327',
                        width:55
                      
                      },
                }}/>
            </View>
            <View>
                 <Button 
                    title="Already have an acoount?"
                    onPress={()=>navigate(Screen.LOGIN)}
                  />
            </View>
            
        </View>
    )
}

export default RegisterScreen

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