import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import MetropolisText from 'MetropolisText'
import Dropdown from '_formElements/Dropdown'
import theme from 'theme'
import CloseIcon from '_icons/CloseIcon'

const ProductCard = ({ item, index, cartLength }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(item.quantity)
  const [items, setItems] = useState([
    { label: '2 kg', value: 2 },
    { label: '3 kg', value: 3 },
    { label: '4 kg', value: 4 },
  ])
  return (
    <View style={[styles.root, { zIndex: (cartLength - index) * 100 }]}>
      <View style={styles.startSection}>
        <Image style={styles.image} source={item.source} />
      </View>

      <View style={styles.midSection}>
        <MetropolisText bold style={styles.name}>
          {item.name}
        </MetropolisText>
        <MetropolisText bold style={styles.prise}>
          {item.prise}
        </MetropolisText>
      </View>
      <Dropdown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        width={80}
        backgroundColor={theme.color.gray}
        dropDownStyle={styles.dropDown}
        containerStyle={styles.dropDownContainer}
        arrowIconStyle={styles.arrowIcon}
        fontSize={12}
      />
      <TouchableOpacity style={styles.deleteButton}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  startSection: {
    width: 85,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 85,
    height: 100,
  },
  midSection: {
    width: 120,
    marginLeft: 5,
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  name: {
    fontSize: 12,
  },
  prise: { fontSize: 15 },
  dropDown: {
    minHeight: 20,
    width: 69,
    // zIndex: -100,
  },
  dropDownContainer: {
    marginTop: 8,
    zIndex: 1000,
  },
  deleteButton: {
    marginTop: 8,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
})
