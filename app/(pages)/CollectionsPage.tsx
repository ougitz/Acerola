import TopBar from '@/components/TopBar'
import ReturnButton from '@/components/buttons/ReturnButton'
import { Colors } from '@/constants/Colors'
import { Collection } from '@/helpers/types'
import { dbReadCollections } from '@/lib/database'
import { AppStyle } from '@/styles/AppStyle'
import { router } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'


const CollectionsPage = () => {
    
    const db = useSQLiteContext()
    const [collections, setCollections] = useState<Collection[]>([])

    useEffect(
        () => {
            const init = async () => {
                const c = await dbReadCollections(db)
                setCollections(c)
            }
            init()
        },
        []
    )    

    const onCollectionPress = async (collection: Collection) => {
        router.navigate({
            pathname: '/(pages)/CollectionPage', 
            params: {
                collection_id: collection.collection_id,
                collection_name: collection.name,
                collection_descr: collection.descr
            }
        })
    }
    
    const renderItem = ({item, index}: {item: Collection, index: number}) => {
        return (
            <Pressable
                onPress={() => onCollectionPress(item)}
                style={[styles.item, {marginRight: index % 2 == 0 ? '4%' : 0}]} >
                <Text style={[AppStyle.textRegular, {color: Colors.backgroundColor, textAlign: "center", alignSelf: "center"}]} >{item.name}</Text>
            </Pressable>
        )
    }    

    return (
        <SafeAreaView style={AppStyle.safeArea}>
            <TopBar title="Collections">
                <ReturnButton/>
            </TopBar>
            <FlatList
                data={collections}
                initialNumToRender={30}
                keyExtractor={(item) => item.collection_id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={renderItem}
                ListFooterComponent={<View style={{height: 62}} />}
            />
        </SafeAreaView>
    )
}

export default CollectionsPage

const styles = StyleSheet.create({
    item: {
        width: '48%',
        height: 52,
        alignItems: "center", 
        justifyContent: "center",         
        backgroundColor: Colors.yellow, 
        borderRadius: 4,
        marginBottom: 10
    }
})