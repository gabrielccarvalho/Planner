import React, { useContext } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types'

import { Header, MonthGrid } from '../containers'
import { YearContext } from '../contexts/YearContext'

type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'MonthView' | 'DayView'
>

const Home = ({ navigation, route }: HomeProps) => {
  const { year, setYear } = useContext(YearContext)

  return (
    <>
      <Header year={year} setYear={setYear} navigation={navigation} route={route} />
      <MonthGrid year={year} navigation={navigation} route={route} />
    </>
  )
}

export default Home
