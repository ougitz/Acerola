import { Manhwa } from '@/helpers/types'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React, { useCallback } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Title from '../Title'
import ViewAllButton from '../buttons/ViewAllButton'
import Row from '../util/Row'


const Item = ({item} : {item: Manhwa}) => {

    const onPress = useCallback(() => {
        router.push({
            pathname: '/(pages)/ManhwaPage',
            params: { manhwa_id: item.manhwa_id }
        });
    }, [item.manhwa_id]);

    return (
        <Pressable onPress={onPress} style={{marginRight: 4}} >
            <Image style={{width: 80, height: 120, borderRadius: 4}} contentFit='cover' source={item.cover_image_url} />
        </Pressable>
    )   
}



const ContinueReadingGrid = ({manhwas}: {manhwas: Manhwa[]}) => {

    const onViewAll = () => {
        router.navigate("/ReadingHistoryPage")
    } 

    if (manhwas.length === 0) {
        return <></>
    }
    
    return (
        <View style={styles.container} >
            <Row style={{width: '100%', justifyContent: "space-between"}} >
                <Title title='Jump Back In'/>
                <ViewAllButton onPress={onViewAll} />
            </Row>
            <FlatList
                data={manhwas}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: Manhwa) => item.manhwa_id.toString()}
                renderItem={({item}) => <Item item={item} />}
            />
        </View>
    )
}

export default ContinueReadingGrid

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10        
    }
})