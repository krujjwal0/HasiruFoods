import { StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

import DropDownPicker from 'react-native-dropdown-picker'
import ExpandLessIcon from '_icons/ExpandLessIcon'
import ExpandMoreIcon from '_icons/ExpandMoreIcon'
import TickIcon from '_icons/TickIcon'
import theme from 'theme'

const Dropdown = ({
  width,
  backgroundColor,
  value,
  setValue,
  items,
  setItems,
  dropDownStyle,
  containerStyle,
  fontSize,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const widthStyle = {
    width,
  }
  const backgroundColorStyle = {
    backgroundColor,
  }
  const fontSizeStyle = {
    fontSize,
  }
  DropDownPicker.setListMode('SCROLLVIEW')
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={[styles.dropdown, widthStyle, backgroundColorStyle, dropDownStyle]}
      textStyle={[styles.dropdownText, fontSizeStyle]}
      dropDownContainerStyle={[styles.dropDownContainer, widthStyle]}
      containerStyle={[widthStyle, containerStyle]}
      TickIconComponent={TickIcon}
      ArrowDownIconComponent={ExpandMoreIcon}
      ArrowUpIconComponent={ExpandLessIcon}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 0,
    zIndex: -10,
    paddingRight: 2.5,
    marginRight: 0,
  },
  dropdownText: {
    fontFamily: theme.font.semiBold,
    fontSize: 16,
  },
  dropDownContainer: {
    borderWidth: 0,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    zIndex: 1000,
    shadowColor: '#5E9C42aa',
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 0.85,
    shadowRadius: 6.5,
    elevation: 25,
  },
})

export default Dropdown
