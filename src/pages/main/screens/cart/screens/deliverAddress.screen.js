import ForEach from 'ForEach'
import React, { useState } from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import theme from 'theme'
import Header from '../../../components/cart/Header'
import AddNewAddressButton from '../../../components/cart/DeliverAddress/AddNewAddressButton'
import { addressData } from '../../../components/cart/DeliverAddress/data'
import AddressCard from '../../../components/cart/DeliverAddress/AddressCard'
import { useLinkTo } from '@react-navigation/native'

const DeliverAddressScreen = () => {
  const [isSameDay, setIsSameDay] = useState(true)
  const linkTo = useLinkTo()

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Header label="Select Deliver Address" />
        <AddNewAddressButton onPress={() => linkTo('/cart/jane')} />
        <ForEach data={addressData} Component={AddressCard} />
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
})

export default DeliverAddressScreen
