import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../../utils/getDimensions'
import ExpandLessIcon from '_icons/ExpandLessIcon'
import ExpandMoreIcon from '_icons/ExpandMoreIcon'
import TickIcon from '_icons/TickIcon'
import Dropdown from '_formElements/Dropdown'

const SelectQuantity = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: '1Kg', value: 1 },
    { label: '2Kg', value: 2 },
    { label: '3Kg', value: 3 },
    { label: '4Kg', value: 4 },
  ])
  return (
    <View style={styles.root}>
      <MetropolisText medium style={styles.text}>
        Quantity:
      </MetropolisText>
      <Dropdown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        width={80}
        dropDownStyle={styles.dropDown}
        placeholder="kg"
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

export default SelectQuantity
