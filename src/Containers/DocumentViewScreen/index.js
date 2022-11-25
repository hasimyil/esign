import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DefaultView, StandartHeader, Timeline } from '@/Components'
import { navigate, navigateAndSimpleReset, navigateBack } from '@/Navigators/utils'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-vector-icons/Entypo';
import RNBounceable from "@freakycoder/react-native-bounceable";
import DividerTitle from '@/Components/DividerTitle'
import { Screen } from '@/Common/Constants'
const DocumentViewScreen = (props) => {

    const { title } = props.route.params.item
    const { Images, Fonts } = useTheme()
    console.log(props.route.params)
    const renderChildren = (item) => {
        return (
            <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.name}</Text>
                <Text>{item.signed ? 'Signed' : 'Waiting'}</Text>
            </View>
        )
    }
    return (
        <DefaultView 
         style={{ backgroundColor: 'white' }}
        >
            <StandartHeader
                title={'Construction Contract'}
                disableSearch
                disableNotifications
                disableLeftButton={false}
                leftButtonAction={() => navigateBack()}
            />
            <View style={{ marginTop: 15, marginHorizontal:15 }}>
               <Text>Created at December 25</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <DividerTitle title={'Signers'} titleRight={'View All Signers'} />
            </View>
            <View>
                <FlatList
                    data={Data}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{backgroundColor:'#eef7ff', borderRadius:25, padding:15, marginTop:15}}

                    scrollEventThrottle={16}
                    ListHeaderComponent={() => (
                        <View style={{ height: 180, marginLeft: 50, marginRight: 15, justifyContent: 'center', marginTop: 15 }}>

                            <RNBounceable style={{
                                backgroundColor: 'white',
                                borderColor: 'white',
                                borderRadius: 5,
                                elevation: 8,
                                width: 25, height: 25, justifyContent: 'center', alignItems: 'center',
                            }}>
                                <Icon name={'plus'} size={20} />
                            </RNBounceable>

                        </View>)}
                    renderItem={({ item }) => (
                        <View style={{
                            marginTop: 15,
                            width: 140,
                            height: 200,
                            borderRadius: 25,
                            flex: 1,
                            marginBottom: 5,
                            marginHorizontal: 10,
                            borderColor: 'white',
                            elevation: 5,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style={{ alignSelf: 'flex-start', flex: 1 }}>
                                <Image source={{ uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` }} style={{
                                    width: 140, height: 150,
                                    borderRadius: 25,

                                }} resizeMode={'stretch'} />
                            </View>
                            <View style={{ alignSelf: 'flex-end', alignItems: 'center', width: '100%' }}>
                                <Text>{item.name}</Text>
                                <Text>owner</Text>
                            </View>

                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ marginTop: 15 }}>
                <DividerTitle title={'Status'} />
            </View>

            <View style={{
                margin: 15, backgroundColor: '#eef7ff',
                elevation: 0,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#eef7ff'
            }}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{
                        backgroundColor: 'white',
                        margin:10,
                        padding:5,
                        elevation:0,
                        borderRadius:8,
                    }}>
                        <Text>Awaiting</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        margin:10,
                        elevation:0,
                        padding:5,
                        borderRadius:5,
                        justifyContent:'center'
                    }}>
                        <Icon name='dots-three-vertical' />
                    </View>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{
                        marginHorizontal:15,
                        alignItems:'center'
                    }}>
                        <Text style={[Fonts.titleX]}>Creation Date</Text>
                        <Text>25 DEC</Text>
                    </View>
                    <View style={{
                        marginHorizontal:15,
                        alignItems:'center'
                    }}>
                        <Text style={[Fonts.titleX]}>Deadline</Text>
                        <Text>29 DEC</Text>
                    </View>

                </View>
                <Timeline
                    datasource={datasource}
                    innerCircle={'icon'}
                    circleSize={35}

                    picStyle={{ width: 50, height: 50, borderRadius: 45 }}
                    renderChildren={renderChildren}
                />
                <RNBounceable onPress={()=>navigate(Screen.PDF_VIEW)} style={{justifyContent:'center',
                borderRadius:10,
                alignItems:'center', margin:25, backgroundColor:'orange',alignSelf:'center', width:150, height:50}}>
                    <Text style={[Fonts.titleX,{color:'white'}]}>View Document</Text>
                </RNBounceable>
            </View>

        </DefaultView>
    )
}

export default DocumentViewScreen

const styles = StyleSheet.create({})

const Data = [
    {
        name: 'Hasim Yilmaz'
    },
    {
        name: 'Test'
    },
    {
        name: 'Test'
    }

]

const datasource = [
    { time: '1:44', title: 'Event 5', name: 'Hasim', signed: true, pic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
    { time: '10:45', title: 'Event 2', name: 'test', signed: false, pic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
    { time: '10:46', title: 'Event 4', name: 'test', signed: false, pic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
    { time: '10:42', title: 'Event 4', name: 'test', signed: true, pic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
]