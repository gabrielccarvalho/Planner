import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
// eslint-disable-next-line import/no-duplicates
import { format, parseISO, setDefaultOptions } from 'date-fns'
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale'

import { ScrollView, View, useWindowDimensions } from 'react-native'

import { Calendar } from 'react-native-calendars'

import { RootStackParamList } from '../../types'

import { Box } from '../components'
import { Months } from '../utils/months'

interface MonthGridProps
  extends NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView' | 'DayView'> {
  year: number
}

const MonthGrid = ({ year, navigation, route }: MonthGridProps) => {
  const { width } = useWindowDimensions()
  setDefaultOptions({ locale: ptBR })

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={{ flex: 1, backgroundColor: '#ffffff', marginBottom: -18, paddingBottom: 100 }}
    >
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 25,
          marginHorizontal: 0,
        }}
      >
        {Months.map(month => (
          <Box month={month.name} key={month.number} navigation={navigation} route={route}>
            <Calendar
              displayName={month.name}
              initialDate={`${year}-${month.number}-01`}
              hideArrows
              renderHeader={() => <></>}
              firstDay={1}
              showSixWeeks={false}
              hideDayNames
              onDayPress={({ dateString }) => {
                const day = format(parseISO(dateString), 'eee')
                const date = format(parseISO(dateString), 'dd/MM')

                navigation.navigate('DayView', {
                  day: `${day.charAt(0).toUpperCase() + day.slice(1)}`,
                  date,
                })
              }}
              style={{
                width: width > 390 ? 290 : 95,
              }}
              theme={{
                textDayFontSize: width > 390 ? 14 : 8,
                todayTextColor: '#F6ACC5',
              }}
            />
          </Box>
        ))}
      </View>
    </ScrollView>
  )
}

export default MonthGrid
