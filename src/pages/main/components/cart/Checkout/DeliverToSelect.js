import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../../utils/getDimensions'
import ExpandLessIcon from '_icons/ExpandLessIcon'
import ExpandMoreIcon from '_icons/ExpandMoreIcon'
import TickIcon from '_icons/TickIcon'
import Dropdown from '_formElements/Dropdown'

const DeliverToSelect = () => {
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
        width={150}
        dropDownStyle={styles.dropDown}
        placeholder="Select Address"
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
    maxHeight: 25,
  },
  text: {
    fontSize: 17,
    marginRight: 5,
  },
  dropDown: {
    minHeight: 25,
  },
})

export default DeliverToSelect
