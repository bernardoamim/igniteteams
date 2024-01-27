import { Loading } from '@components/Loading'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Routes } from '@routes/index'

import theme from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  // AsyncStorage.clear()

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
