import React, { useState } from 'react'

import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { YearContext } from './contexts/YearContext'

import { Home } from './screens'

function App(): JSX.Element {
  const [year, setYear] = useState(2023)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f3c4d6' }}>
        <YearContext.Provider value={{ year, setYear }}>
          <StatusBar barStyle='dark-content' backgroundColor='#f3c4d6' />
          <Home />
        </YearContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
