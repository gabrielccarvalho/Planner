import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { YearContext } from './contexts/YearContext'

import { Home, MonthView, DayView } from './screens'
import { RootStackParamList } from '../types'

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  const [year, setYear] = useState(2023)

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f3c4d6' }}>
          <YearContext.Provider value={{ year, setYear }}>
            <StatusBar barStyle='dark-content' backgroundColor='#f3c4d6' />
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='MonthView' component={MonthView} />
              <Stack.Screen name='DayView' component={DayView} />
            </Stack.Navigator>
          </YearContext.Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
