import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import UPICard from './UPICard'
import theme from 'theme'
import AddNewButton from './AddNewButton'
import { localStyles } from './style'

const UPIPaymentSection = () => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={localStyles.title}>
        UPI
      </MetropolisText>
      <View style={styles.upiIdContainer}>
        <UPICard
          item={{
            upiBrandName: 'GooglePay',
            UPIid: 'sharanyayyigty@axis.com',
          }}
        />
        <UPICard
          item={{
            upiBrandName: 'paytm',
            UPIid: 'sharanya@axis.com',
          }}
        />
        <UPICard
          item={{
            upiBrandName: 'phonePe',
            UPIid: 'sharanya@axis.com',
          }}
        />
        <UPICard
          item={{
            upiBrandName: 'mobiKwik',
            UPIid: 'sharanya@axis.com',
          }}
        />
      </View>
      <AddNewButton />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    borderColor: theme.color.darkGray,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: theme.color.primary,
    marginTop: 20,
  },
  upiIdContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
})

export default UPIPaymentSection
