import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Header, MonthGrid } from '../containers'

type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'MonthView' | 'DayView'
>

const Home = ({ navigation, route }: HomeProps) => {
  return (
    <>
      <Header showYear navigation={navigation} route={route} />
      <MonthGrid navigation={navigation} route={route} />
    </>
  )
}

export default Home
