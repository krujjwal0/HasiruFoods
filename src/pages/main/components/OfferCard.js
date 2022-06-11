import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import MetropolisText from 'MetropolisText'

const OfferCard = ({ text, icon }) => {
  return (
    <View style={styles.root}>
      <MetropolisText medium style={styles.text}>
        Subscribers get 10% off on every purchase and free delivery
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 22,
    marginTop: 0,
    marginBottom: 30,
  },
  text: {
    color: '#373737',
    fontSize: 18,
    lineHeight: 25,
  },
  image: {
    width: 120,
    height: 70,
  },
})

export default OfferCard
