import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Header, WeekBox } from '../containers'

const MonthView = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView'>) => {
  return (
    <>
      <Header month={route.params?.month} navigation={navigation} route={route} />
      <WeekBox week='Semana 1' />
      <WeekBox week='Semana 2' />
      <WeekBox week='Semana 3' />
      <WeekBox week='Semana 4' />
    </>
  )
}

export default MonthView
