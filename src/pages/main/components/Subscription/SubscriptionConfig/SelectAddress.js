import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../../utils/getDimensions'
import ExpandLessIcon from '_icons/ExpandLessIcon'
import ExpandMoreIcon from '_icons/ExpandMoreIcon'
import TickIcon from '_icons/TickIcon'
import Dropdown from '_formElements/Dropdown'

const SelectAddress = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Home', value: 'home' },
    { label: 'Work', value: 'work' },
  ])
  return (
    <View style={styles.root}>
      <MetropolisText medium style={styles.text}>
        Deliver To
      </MetropolisText>
      <Dropdown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        width={105}
        dropDownStyle={styles.dropDown}
        placeholder="Select"
        TickIconComponent={TickIcon}
        ArrowDownIconComponent={ExpandMoreIcon}
        ArrowUpIconComponent={ExpandLessIcon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
    maxHeight: 35,
  },
  text: {
    fontSize: 17,
    marginRight: 5,
  },
  dropDown: {
    minHeight: 35,
  },
})

export default SelectAddress
