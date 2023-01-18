import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Header } from '../containers'

const DayView = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home' | 'DayView'>) => {
  return (
    <>
      <Header
        day={route.params?.day}
        date={route.params?.date}
        navigation={navigation}
        route={route}
      />
    </>
  )
}

export default DayView
