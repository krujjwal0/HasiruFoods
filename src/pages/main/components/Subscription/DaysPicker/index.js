import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useState, useCallback } from 'react'
import PickerPresetButton from './PickerPresetButton'
import PickerDayButton from './PickerDayButton'
import MetropolisText from 'MetropolisText'

const DaysPicker = ({ small, color }) => {
  const [days, setDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: true,
  })

  const isEveryday =
    days.monday &&
    days.tuesday &&
    days.wednesday &&
    days.thursday &&
    days.friday &&
    days.saturday &&
    days.sunday

  const isWeekends =
    !days.monday &&
    !days.tuesday &&
    !days.wednesday &&
    !days.thursday &&
    !days.friday &&
    days.saturday &&
    days.sunday

  const isWeekdays =
    days.monday &&
    days.tuesday &&
    days.wednesday &&
    days.thursday &&
    days.friday &&
    !days.saturday &&
    !days.sunday

  const isAltMWF =
    days.monday &&
    !days.tuesday &&
    days.wednesday &&
    !days.thursday &&
    days.friday &&
    !days.saturday &&
    !days.sunday

  const isAltTTS =
    !days.monday &&
    days.tuesday &&
    !days.wednesday &&
    days.thursday &&
    !days.friday &&
    days.saturday &&
    !days.sunday

  const isCustom =
    !isAltTTS && !isAltMWF && !isWeekdays && !isEveryday && !isWeekends

  const handleOnEveryday = useCallback(() => {
    setDays({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true,
    })
  }, [])

  const handleOnWeekends = useCallback(() => {
    setDays({
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: true,
    })
  }, [])

  const handleOnWeekdays = useCallback(() => {
    setDays({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    })
  }, [])

  const handleOnAltMWF = useCallback(() => {
    setDays({
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: false,
      sunday: false,
    })
  }, [])

  const handleOnAltTThS = useCallback(() => {
    setDays({
      monday: false,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: false,
      saturday: true,
      sunday: false,
    })
  }, [])

  const handleOnPressDays = useCallback(value => {
    setDays(preValue => ({
      ...preValue,
      [value]: !preValue[value],
    }))
  }, [])

  const handleCustom = useCallback(() => {
    if (!isCustom)
      setDays({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      })
  }, [isCustom])

  return (
    <View style={styles.root}>
      <View style={styles.presetContainer}>
        <PickerPresetButton
          isActive={isEveryday}
          label="Everyday"
          onPress={handleOnEveryday}
          small={small}
        />
        <PickerPresetButton
          isActive={isWeekends}
          label="Weekends"
          onPress={handleOnWeekends}
          small={small}
        />
        <PickerPresetButton
          isActive={isWeekdays}
          label="Weekdays"
          onPress={handleOnWeekdays}
          small={small}
        />
        <PickerPresetButton
          isActive={isAltMWF}
          label="Alt(M,W,F)"
          onPress={handleOnAltMWF}
          small={small}
        />
        <PickerPresetButton
          isActive={isAltTTS}
          label="Alt(T,Th,S)"
          onPress={handleOnAltTThS}
          small={small}
        />
        <PickerPresetButton
          isActive={isCustom}
          label="Custom"
          onPress={handleCustom}
          small={small}
        />
      </View>
      <MetropolisText medium style={styles.strong}>
        Select Days Below
      </MetropolisText>
      <View style={styles.daysContainer}>
        <PickerDayButton
          color={color}
          label="M"
          isActive={days.monday}
          onPress={handleOnPressDays}
          value="monday"
          small={small}
        />
        <PickerDayButton
          color={color}
          label="T"
          isActive={days.tuesday}
          onPress={handleOnPressDays}
          value="tuesday"
          small={small}
        />
        <PickerDayButton
          color={color}
          label="W"
          isActive={days.wednesday}
          onPress={handleOnPressDays}
          value="wednesday"
          small={small}
        />
        <PickerDayButton
          color={color}
          label="Th"
          isActive={days.thursday}
          onPress={handleOnPressDays}
          value="thursday"
          small={small}
        />
        <PickerDayButton
          color={color}
          label="F"
          isActive={days.friday}
          onPress={handleOnPressDays}
          value="friday"
          small={small}
        />
        <PickerDayButton
          color={color}
          label="S"
          isActive={days.saturday}
          onPress={handleOnPressDays}
          small={small}
          value="saturday"
        />
        <PickerDayButton
          color={color}
          label="Su"
          isActive={days.sunday}
          onPress={handleOnPressDays}
          value="sunday"
          small={small}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 12,
  },
  presetContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  strong: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 12,
  },
  daysContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default DaysPicker
