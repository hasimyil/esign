import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import { DefaultView, StandartHeader } from '@/Components';
import { navigateBack } from '@/Navigators/utils';

const PdfView = () => {
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return (
        <DefaultView >
            <StandartHeader
                title={'Construction Contract'}
                disableSearch
                disableNotifications
                disableLeftButton={false}
                leftButtonAction={() => navigateBack()}
            />
            <Pdf
                source={source}
                trustAllCerts={false}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onLoadProgress={()=>{
                    console.log("Loading")
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        </DefaultView>
    )
}

export default PdfView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor:'white'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});