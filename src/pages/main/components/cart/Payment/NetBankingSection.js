import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import AddNewButton from './AddNewButton'
import WalletCard from './WalletCard'
import { localStyles } from './style'

const NetBankingSection = () => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={[localStyles.title, styles.title]}>
        Net-Banking
      </MetropolisText>
      <View style={styles.NetBankingIdContainer}>
        <View style={styles.NetBankingId}></View>
        <View style={styles.NetBankingId}></View>
        <View style={styles.NetBankingId}></View>
        <View style={styles.NetBankingId}></View>
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
    marginBottom: 20,
  },
  NetBankingIdContainer: {
    marginTop: 2,
    marginBottom: 15,
    flexDirection: 'row',
  },
  NetBankingId: {
    padding: 30,
    borderWidth: 1,
    borderColor: theme.color.darkGray,
    borderRadius: 60,
    marginRight: 15,
  },
})

export default NetBankingSection
