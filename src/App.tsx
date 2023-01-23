import React, { useContext } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { YearContext as YearContextProvider } from './contexts'
import { YearContext } from './contexts/YearContext'

import { Home, MonthView, DayView } from './screens'
import { RootStackParamList } from '../types'

const Tab = createMaterialBottomTabNavigator<RootStackParamList>()

function App(): JSX.Element {
  const { year } = useContext(YearContext)
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f3c4d6' }}>
          <YearContextProvider>
            <StatusBar barStyle='dark-content' backgroundColor='#f3c4d6' />
            <Tab.Navigator
              initialRouteName='Home'
              activeColor='#ff3186'
              barStyle={{ backgroundColor: '#f3c4d6', padding: 0 }}
            >
              <Tab.Screen
                name='Home'
                component={Home}
                options={{ tabBarIcon: 'home', tabBarLabel: 'Anual' }}
              />
              <Tab.Screen
                name='MonthView'
                component={MonthView}
                initialParams={{ month: 'Janeiro', year: year }}
                options={{ tabBarIcon: 'view-week', tabBarLabel: 'Semanal' }}
              />
              <Tab.Screen
                name='DayView'
                component={DayView}
                initialParams={{ day: 'Domingo', date: '01/01' }}
                options={{ tabBarIcon: 'view-day', tabBarLabel: 'Diário' }}
              />
            </Tab.Navigator>
          </YearContextProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
