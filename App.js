import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text className="underline">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}