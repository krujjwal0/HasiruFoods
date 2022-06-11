import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import AddNewButton from './AddNewButton'
import WalletCard from './WalletCard'
import { localStyles } from './style'

const WalletsSection = () => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={localStyles.title}>
        Wallets
      </MetropolisText>
      <View style={styles. WalletIdContainer}>
        <WalletCard
          item={{
            upiBrandName: 'paytm',
            WalletsId: '7717787678',
          }}
        />
        <WalletCard
          item={{
            upiBrandName: 'phonePe',
            WalletsId: '7717787678',
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
   WalletIdContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
})

export default WalletsSection
