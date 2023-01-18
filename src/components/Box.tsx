import React, { useContext } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { TouchableOpacity, useWindowDimensions } from 'react-native'
import styled from 'styled-components/native'

import { RootStackParamList } from '../../types'
import { YearContext } from '../contexts/YearContext'

interface MonthProps
  extends NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView' | 'DayView'> {
  month: string
  children?: React.ReactNode
}

const Container = styled.View`
  width: 225px;
  height: 325px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #f6acc5;
  border-radius: 10px;
  margin: 10px;
  padding: 0;
  z-index: 999;
`

const Header = styled.View`
  width: 200px;
  height: 30px;
  z-index: 2;
  margin-bottom: -5px;
  align-items: center;
  justify-content: center;
  background-color: #f6acc5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
`

const Box = ({ children, month, navigation }: MonthProps) => {
  const { width } = useWindowDimensions()
  const { year } = useContext(YearContext)

  return (
    <Container
      style={width > 390 ? { width: 300, height: 315 } : { width: 100, height: 100 }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MonthView', { month: month, year: year })
        }}
        style={{ zIndex: 999 }}
      >
        <Header
          style={width > 390 ? { width: 300, height: 36 } : { width: 100, height: 18 }}
        >
          <Title style={width > 390 ? { fontSize: 18 } : { fontSize: 11 }}>{month}</Title>
        </Header>
      </TouchableOpacity>
      {children}
    </Container>
  )
}

export default Box
