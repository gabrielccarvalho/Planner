import React from 'react'

import { useWindowDimensions } from 'react-native'

import { Button } from 'react-native-material-ui'

import styled from 'styled-components/native'

interface HeaderProps {
  year: number
  setYear: React.Dispatch<React.SetStateAction<number>>
  children?: React.ReactNode
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 400px;
  justify-content: center;
  align-items: center;
  background-color: #f3c4d6;
  padding: 0;
  margin: 0;
`

const Title = styled.Text`
  font-weight: bold;
  color: #ff3186;
  /* font-family: 'AmaticSCBold'; */
`

const Header = ({ year, setYear }: HeaderProps) => {
  const { width } = useWindowDimensions()

  return (
    <Container style={width > 390 ? { maxHeight: 250 } : { maxHeight: 100 }}>
      <Button
        primary
        text={`${year - 1}`}
        onPress={() => setYear(year - 1)}
        style={{
          text: { fontSize: 20, color: '#ff3186' },
          container: {
            borderColor: '#ff3186',
            borderWidth: 2,
            padding: 1,
            borderRadius: 10,
            marginRight: 80,
          },
        }}
      />
      <Title style={width > 390 ? { fontSize: 128 } : { fontSize: 64 }}>{year}</Title>
      <Button
        text={`${year + 1}`}
        onPress={() => setYear(year + 1)}
        style={{
          text: { fontSize: 20, color: '#ff3186' },
          container: {
            borderColor: '#ff3186',
            borderWidth: 2,
            padding: 1,
            borderRadius: 10,
            marginLeft: 80,
          },
        }}
      />
    </Container>
  )
}

export default Header
