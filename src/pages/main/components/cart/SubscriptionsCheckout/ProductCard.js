import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const ProductCard = ({ item }) => {
  return (
    <View style={styles.root}>
      <View style={styles.display}>
        <MetropolisText bold style={styles.name}>
          {item.name}
        </MetropolisText>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.source} />
        </View>
      </View>
      <View style={styles.info}>
        <MetropolisText medium style={styles.text}>
          Quantity: <MetropolisText semiBold>{item.quantity}</MetropolisText>
        </MetropolisText>
        <MetropolisText medium style={styles.text}>
          Delivering on
        </MetropolisText>
        <MetropolisText semiBold style={styles.text}>
          Tu, Th, Fr
        </MetropolisText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: theme.color.gray + 99,
    borderRadius: 18,
    marginTop: 18,
  },
  display: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
  },
  info: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 12,
  },
  imageContainer: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 140,
  },
  text: { fontSize: 16, lineHeight: 22 },
})

export default ProductCard
