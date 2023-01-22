import React from 'react'

import styled from 'styled-components/native'

import { Canvas } from '../components'

interface WeekBoxProps {
  week: string
}

const Container = styled.View`
  height: 200px;
  margin: 20px;
  width: 95%;
  border-radius: 15px;
  padding: 10px;
  background-color: #f3c4d6;
`

const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #880ed4;
  margin-top: -50px;
`

const WeekBox = ({ week }: WeekBoxProps) => {
  return (
    <Container>
      <Canvas style={{ alignItems: 'center' }}>
        <Text>{week}</Text>
      </Canvas>
    </Container>
  )
}

export default WeekBox
