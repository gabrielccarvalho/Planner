import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ptBR } from 'date-fns/locale'

import { useWindowDimensions } from 'react-native'

import { IconButton } from 'react-native-paper'
import 'react-native-vector-icons'

import styled from 'styled-components/native'

import { RootStackParamList } from '../../types'

interface HeaderProps
  extends NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView' | 'DayView'> {
  year?: number
  month?: string
  day?: string
  date?: string
  setYear?: React.Dispatch<React.SetStateAction<number>>
  children?: React.ReactNode
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 250px;
  justify-content: center;
  align-items: center;
  background-color: #f3c4d6;
  padding: 0;
  margin: 0;
`

const Title = styled.Text`
  font-weight: bold;
  color: #ff3186;
  margin: 0;
  /* font-family: 'AmaticSCBold'; */
`

const TitleContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = ({
  month,
  year,
  day,
  date,
  setYear = () => {
    console.info('')
  },
  navigation,
}: HeaderProps) => {
  const { width } = useWindowDimensions()

  return (
    <Container>
      <IconButton
        icon='skip-previous-circle'
        iconColor='#ff3186'
        size={35}
        onPress={year ? () => setYear(year - 1) : () => navigation.goBack()}
        accessibilityLabelledBy={ptBR}
        accessibilityLanguage={ptBR}
        accessibilityLabel='Botão de voltar'
      />
      <TitleContainer>
        <Title style={width > 390 ? { fontSize: 128 } : { fontSize: 64 }}>
          {year || month || day}
        </Title>
        {date && <Title style={{ fontSize: 48, marginTop: -30 }}>{date}</Title>}
      </TitleContainer>
      <IconButton
        icon='skip-next-circle'
        iconColor='#ff3186'
        size={35}
        onPress={year ? () => setYear(year + 1) : () => navigation.goBack()}
        accessibilityLabelledBy={ptBR}
        accessibilityLanguage={ptBR}
        accessibilityLabel='Botão de avanço'
      />
    </Container>
  )
}

export default Header
