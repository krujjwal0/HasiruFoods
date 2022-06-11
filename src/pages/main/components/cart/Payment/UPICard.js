import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import GooglePay from '_icons/payment/GooglePay.svg'
import MobiKwik from '_icons/payment/MobiKwik.svg'
import Paytm from '_icons/payment/Paytm.svg'
import PhonePe from '_icons/payment/PhonePe.svg'
import UPILogo from '_icons/payment/UPILogo.svg'
import theme from 'theme'

const UPICard = ({ item }) => {
  const handleOnPress = useCallback(() => {}, [])

  const Icon =
    item.upiBrandName.toLowerCase() === 'googlePay'.toLowerCase()
      ? GooglePay
      : item.upiBrandName.toLowerCase() === 'mobiKwik'.toLowerCase()
      ? MobiKwik
      : item.upiBrandName.toLowerCase() === 'paytm'.toLowerCase()
      ? Paytm
      : item.upiBrandName.toLowerCase() === 'phonePe'.toLowerCase()
      ? PhonePe
      : UPILogo

  const IconStyle =
    item.upiBrandName.toLowerCase() === 'googlePay'.toLowerCase()
      ? styles.GooglePay
      : item.upiBrandName.toLowerCase() === 'mobiKwik'.toLowerCase()
      ? styles.MobiKwik
      : item.upiBrandName.toLowerCase() === 'paytm'.toLowerCase()
      ? styles.Paytm
      : item.upiBrandName.toLowerCase() === 'phonePe'.toLowerCase()
      ? styles.PhonePe
      : styles.UPILogo

  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <Icon
          width={IconStyle.width}
          height={IconStyle.height}
          style={IconStyle}
        />
      </View>
      <MetropolisText numberOfLines={1} medium style={styles.upiId}>
        {item.UPIid}
      </MetropolisText>
      <Pressable
        android_ripple={{ color: theme.color.rippleGray, foreground: true }}
        style={styles.pressable}
        onPress={handleOnPress}>
        <MetropolisText semiBold style={[styles.pressableText]}>
          Pay
        </MetropolisText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: 15,
    borderRadius: 15,
    // backgroundColor: theme.color.primary + 11,
  },
  iconContainer: {
    width: 80,
    height: 30,
  },
  GooglePay: {
    marginTop: 4,
    width: 70,
    height: 30,
    marginLeft: -9,
  },
  MobiKwik: {
    marginTop: -7,
    width: 100,
    height: 40,
    marginLeft: -10,
  },
  Paytm: {
    width: 70,
    height: 30,
    marginTop: -2,
    marginLeft: -6,
  },
  PhonePe: {
    marginTop: -5,
    width: 100,
    height: 40,
    marginLeft: -10,
  },
  UPILogo: {
    marginTop: 4,
    // marginLeft: -5,
  },
  upiId: {
    fontSize: 16.5,
    marginLeft: 6,
    marginRight: 'auto',
    maxWidth: 190,
  },
  pressable: {
    backgroundColor: theme.color.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    paddingVertical: 6,
    borderRadius: 19,
    overflow: 'hidden',
    marginLeft: 15,
    minWidth: 60,
    maxWidth: 60,
  },
  pressableText: {
    fontSize: 16,
    color: '#FFF',
  },
})

export default UPICard
