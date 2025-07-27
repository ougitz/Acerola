import { Colors } from '@/constants/Colors';
import { dbMigrate } from '@/lib/database';
import { AppStyle } from '@/styles/AppStyle';
import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';


const TOAST_CONFIG = {
  success: ({ text1, text2 }: {text1: string, text2: string}) => (
    <View style={styles.toast}>
      <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 18}]}>{text1}</Text>
      {text2 && <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 16}]}>{text2}</Text>}
      <View style={{position: 'absolute', left: 0, top: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, backgroundColor: Colors.ononokiGreen, height: 66, width: 5}} />
    </View>
  ),
  
  error: ({ text1, text2 }: {text1: string, text2: string}) => (
    <View style={styles.toast}>
      <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 18}]}>{text1}</Text>
      {text2 && <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 16}]}>{text2}</Text>}
      <View style={{position: 'absolute', left: 0, top: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, backgroundColor: Colors.neonRed, height: 66, width: 5}} />
    </View>
  ),
  
  info: ({ text1, text2 }: {text1: string, text2: string}) => (
    <View style={styles.toast}>
      <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 18}]}>{text1}</Text>
      {text2 && <Text numberOfLines={1} style={[AppStyle.textRegular, {fontSize: 16}]}>{text2}</Text>}
      <View style={{position: 'absolute', left: 0, top: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, backgroundColor: Colors.yellow, height: 66, width: 5}} />
    </View>
  )
};


const _layout = () => {
  return (
      <GestureHandlerRootView style={{flex: 1, backgroundColor: Colors.backgroundColor}} >
        <StatusBar hidden={true} barStyle={'light-content'} animated={true}/>
        <SQLiteProvider databaseName='acerola.db' onInit={dbMigrate}>
          <Stack>
              <Stack.Screen name='index' options={{headerShown: false}} />              
              <Stack.Screen name='(pages)/HomePage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ManhwaPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ManhwaSearch' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ScansPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ChapterPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/CustomGenrePage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/GenresPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/CollectionsPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/CollectionPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ManhwaByGenre' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ManhwaByAuthor' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ReadingHistoryPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/LatestUpdatesPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/MostViewPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/BugReportPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/LibraryPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/DonatePage' options={{headerShown: false}} />              
              <Stack.Screen name='(pages)/RequestManhwaPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/ReleasesPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/NewsPage' options={{headerShown: false}} />
              <Stack.Screen name='(pages)/DisclaimerPage' options={{headerShown: false}} />
          </Stack>
          <Toast 
            position='bottom' 
            config={TOAST_CONFIG as any} 
            bottomOffset={60} 
            visibilityTime={2500} 
            avoidKeyboard={true} 
            swipeable={true}/>
        </SQLiteProvider>
      </GestureHandlerRootView>    
  )
}

export default _layout


const styles = StyleSheet.create({
  toast: {
    height: 66, 
    width: '90%', 
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 4, 
    backgroundColor: Colors.gray
  }
})
