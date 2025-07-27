import { Colors } from '@/constants/Colors'
import { Collection } from '@/helpers/types'
import { AppStyle } from '@/styles/AppStyle'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'


type CollectionType = Collection | 'Header'


const CollectionGrid = ({collections}: {collections: Collection[]}) => {

    const onPress = (collection: Collection) => {
        router.navigate({
            pathname: '/(pages)/CollectionPage', 
            params: {
                collection_name: collection.name,
                collection_id: collection.collection_id,
                collection_descr: collection.descr
            }
        })
    }

    const viewAllCollections = () => {
        router.navigate("/(pages)/CollectionsPage")
    }

    const renderItem = ({item}: {item: CollectionType}) => {
        if (item === "Header") {
            return (
                <Pressable onPress={viewAllCollections} style={styles.button} >
                    <Text style={[AppStyle.textRegular, {color: Colors.backgroundColor}]}>All Collections</Text>
                </Pressable>
            )
        }
        return (
            <Pressable onPress={() => onPress(item)} style={styles.button} >
                <Text style={[AppStyle.textRegular, {color: Colors.backgroundColor}]}>{item.name}</Text>
            </Pressable>
        )
    }    

    if (collections.length === 0) {
        return <></>
    }

    return (
        <View style={styles.container} >
            <FlatList
                data={[...['Header'] as any, ...collections]}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={renderItem}
            />
        </View>
    )
}

export default CollectionGrid

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10,
        alignItems: "flex-start"
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: Colors.yellow,
        marginRight: 10
    }
})