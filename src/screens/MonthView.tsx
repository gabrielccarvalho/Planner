import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Header } from '../containers'

const MonthView = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView'>) => {
  return (
    <>
      <Header month={route.params?.month} navigation={navigation} route={route} />
    </>
  )
}

export default MonthView
