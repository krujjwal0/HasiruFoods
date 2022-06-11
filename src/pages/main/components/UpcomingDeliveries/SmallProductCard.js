import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'

const SmallProductCard = ({ item }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={item.source} />
      </View>
      <MetropolisText medium style={styles.quantityText}>
        {item.quantity}Kg
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 90,
  },
  image: {
    width: 130,
    height: 130,
  },
  quantityText: {
    textAlign: 'center',
  },
})

export default SmallProductCard
