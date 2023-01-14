import React from 'react'

import { useWindowDimensions } from 'react-native'
import styled from 'styled-components/native'

interface HeaderProps {
  year: string
  children?: React.ReactNode
}

const Container = styled.View`
  flex: 1;
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

const Header = ({ year }: HeaderProps) => {
  const { width } = useWindowDimensions()

  return (
    <Container style={width > 390 ? { maxHeight: 250 } : { maxHeight: 100 }}>
      <Title style={width > 390 ? { fontSize: 128 } : { fontSize: 64 }}>{year}</Title>
    </Container>
  )
}

export default Header
