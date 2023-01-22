import React, { useContext } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IconButton } from 'react-native-paper'
import 'react-native-vector-icons'

import styled from 'styled-components/native'

import { RootStackParamList } from '../../types'
import { YearContext } from '../contexts/YearContext'

interface HeaderProps
  extends NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView' | 'DayView'> {
  showYear?: boolean
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
  margin-bottom: 25px;
`

const Title = styled.Text`
  /* font-weight: 700; */
  color: #ff3186;
`

const TitleContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = ({ showYear, month, day, date, navigation }: HeaderProps) => {
  const { year, addYear, subYear } = useContext(YearContext)
  return (
    <Container>
      <IconButton
        icon='skip-previous-circle'
        iconColor='#ff3186'
        size={35}
        onPress={showYear ? subYear : () => navigation.goBack()}
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
        accessibilityLabel='Botão de voltar'
      />
      <TitleContainer>
        <Title style={{ fontSize: 128 }}>{(showYear && year) || month || day}</Title>
        {date && <Title style={{ fontSize: 48, marginTop: -30 }}>{date}</Title>}
      </TitleContainer>
      <IconButton
        icon='skip-next-circle'
        iconColor='#ff3186'
        size={35}
        onPress={showYear ? addYear : () => navigation.goBack()}
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
        accessibilityLabel='Botão de avanço'
      />
    </Container>
  )
}

export default Header
