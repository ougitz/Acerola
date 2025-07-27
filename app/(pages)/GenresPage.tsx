import TopBar from '@/components/TopBar'
import ReturnButton from '@/components/buttons/ReturnButton'
import { Genre } from '@/helpers/types'
import { hp, wp } from '@/helpers/util'
import { dbReadGenres } from '@/lib/database'
import { AppStyle } from '@/styles/AppStyle'
import { FlashList } from '@shopify/flash-list'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, View } from 'react-native'


const MAX_WIDTH = wp(90)

const GenresPage = () => {

    const db = useSQLiteContext()
    const [genres, setGenres] = useState<Genre[]>([])
 
    const width = 400 > MAX_WIDTH ? MAX_WIDTH : 400

    useEffect(
        () => {
            let isCancelled = false
            const init = async () => {
                const g = await dbReadGenres(db)
                if (isCancelled) { return }
                setGenres(g)
            }
            
            init()

            return () => { isCancelled = true }
        },
        [db]
    )

    const onPress = async (genre: Genre) => {
        router.navigate({
            pathname: '/(pages)/ManhwaByGenre', 
            params: {
                genre: genre.genre,
                genre_id: genre.genre_id
            }
        })
    }
    
    const renderItem = ({item, index}: {item: Genre, index: number}) => {
        return (
            <Pressable
                onPress={() => onPress(item)}
                style={{marginBottom: 4}} >
                <Image 
                    style={{width, height: 280, borderRadius: 4}} 
                    source={item.image_url} 
                    contentFit='contain'
                    />
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={AppStyle.safeArea}>
            <TopBar title="Genres">
                <ReturnButton/>
            </TopBar>
            <View style={{flex: 1}} >
                <FlashList
                    data={genres}
                    keyExtractor={(item) => item.genre_id.toString()}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={280}
                    drawDistance={hp(100)}
                    renderItem={renderItem}
                    ListFooterComponent={<View style={{height: 62}} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default GenresPage
