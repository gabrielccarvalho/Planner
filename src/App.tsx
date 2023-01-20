import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { YearContext } from './contexts'

import { Home, MonthView, DayView } from './screens'
import { RootStackParamList } from '../types'

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f3c4d6' }}>
          <YearContext>
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
          </YearContext>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
