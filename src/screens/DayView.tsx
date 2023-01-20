import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Canvas } from '../components'
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
      <Canvas />
    </>
  )
}

export default DayView
