import React from 'react'

import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Home } from './screens'

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f3c4d6' }}>
        <StatusBar barStyle='dark-content' backgroundColor='#f3c4d6' />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
