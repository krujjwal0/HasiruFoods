// Library
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

// Component / Utils
import { nextDayData, sameDayData } from '../../../components/cart/TimeSlot/data'
import SlotSectionButton from '../../../components/cart/TimeSlot/SlotSectionButton'
import TimeSlot from '../../../components/cart/TimeSlot/TimeSlot'
import Header from '../../../components/cart/Header'
import ForEach from 'ForEach'
import theme from 'theme'

const TimeSlotScreen = () => {
  const [isSameDay, setIsSameDay] = useState(true)

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Header label="Select Time Slot" />
        <View style={styles.nav}>
          <SlotSectionButton
            day="Same"
            date="12"
            month="June"
            leftBtn
            isActive={isSameDay}
            onPress={() => setIsSameDay(true)}
          />
          <SlotSectionButton
            day="Next"
            date="13"
            month="June"
            rightBtn
            isActive={!isSameDay}
            onPress={() => setIsSameDay(false)}
          />
        </View>
        <ForEach
          data={isSameDay ? sameDayData : nextDayData}
          Component={TimeSlot}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    marginTop: theme.element.headerHeight,
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 10,
  },
  nav: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginTop: 6,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

export default TimeSlotScreen
