/* eslint-disable import/no-duplicates */
import React, { useContext } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { format, parseISO, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'

import { ScrollView, View, SafeAreaView } from 'react-native'

import { Calendar } from 'react-native-calendars'

import { RootStackParamList } from '../../types'

import { Box } from '../components'
import { YearContext } from '../contexts/YearContext'
import { Months } from '../utils/months'

const MonthGrid = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home' | 'MonthView' | 'DayView'>) => {
  const { year } = useContext(YearContext)
  setDefaultOptions({ locale: ptBR })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
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
            <Box
              month={month.name}
              key={month.number}
              navigation={navigation}
              route={route}
            >
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
                style={{ width: 290 }}
                theme={{ textDayFontSize: 14, todayTextColor: '#F6ACC5' }}
              />
            </Box>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MonthGrid
