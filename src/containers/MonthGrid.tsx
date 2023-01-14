import React from 'react'

import { ScrollView, View, useWindowDimensions } from 'react-native'

import { Calendar } from 'react-native-calendars'

import { Box } from '../components'
import { Months } from '../utils/months'

interface MonthGridProps {
  year: number
}

const MonthGrid = ({ year }: MonthGridProps) => {
  const { width } = useWindowDimensions()

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
          <Box month={month.name} key={month.number}>
            <Calendar
              displayName={month.name}
              initialDate={`${year}-${month.number}-01`}
              hideArrows
              renderHeader={() => <></>}
              firstDay={1}
              showSixWeeks={false}
              hideDayNames
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
