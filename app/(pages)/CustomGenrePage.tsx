import TopBar from '@/components/TopBar'
import ReturnButton from '@/components/buttons/ReturnButton'
import { getItemGridDimensions, shuffle, wp } from '@/helpers/util'
import { AppStyle } from '@/styles/AppStyle'
import { FlashList } from '@shopify/flash-list'
import { Image } from 'expo-image'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'


const MAX_WIDTH = wp(92)


const CustomGenrePage = () => {

    const images = [
        require("@/assets/genre/Uncensored.png"),
        require("@/assets/genre/Isekai.png"),
        require("@/assets/genre/Historical.png"),
        require("@/assets/genre/Sports.png"),
        require("@/assets/genre/Adventure.png"),
        require("@/assets/genre/Coworkers.png"),
        require("@/assets/genre/Drama.png"),
        require("@/assets/genre/School.png"),
        require("@/assets/genre/Harem.png"),
        require("@/assets/genre/Action.png")
    ]

    shuffle(images)

    const { width, height } = getItemGridDimensions(
        wp(4),
        20,
        2,
        400,
        280
    )

    const renderItem = ({item}: {item: any}) => {


        return (
            <Image source={item} style={{width, height, borderRadius: 4, marginBottom: 10}} contentFit='contain' />
        )
    }
    
    return (
        <SafeAreaView style={AppStyle.safeArea} >
            <TopBar title='Genres' >
                <ReturnButton/>
            </TopBar>
            <View style={{flex: 1}} >
                <FlashList
                    data={images}
                    numColumns={2}
                    estimatedItemSize={240}
                    keyExtractor={(item) => item}
                    renderItem={renderItem as any}
                />
            </View>
        </SafeAreaView>
    )
}

export default CustomGenrePage

const styles = StyleSheet.create({})