import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Title from '../Title'
import ViewAllButton from '../buttons/ViewAllButton'
import Row from '../util/Row'


const Item = ({item}: {item: string}) => {
    return (
        <Image source={item} style={{width: 200, height: 120, marginRight: 8, borderRadius: 4}} contentFit='cover' />
    )
}


const CustomGenreGrid = () => {

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

    const onPress = () => {
        router.navigate("/(pages)/CustomGenrePage")
    }

    return (
        <View style={styles.container} >
            <Row style={{width: '100%', justifyContent: "space-between"}} >
                <Title title='Genres'/>
                <ViewAllButton onPress={onPress} />
            </Row>
            <FlatList
                data={images}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                renderItem={({item}) => <Item item={item} />}
            />
        </View>
    )
}

export default CustomGenreGrid

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10
    }
})