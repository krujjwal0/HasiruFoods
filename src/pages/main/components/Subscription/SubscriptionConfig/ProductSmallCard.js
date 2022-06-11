import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'

const ProductSmallCard = ({ item }) => {
  return (
    <View style={[styles.root, { backgroundColor: item.bgColor }]}>
      <MetropolisText bold style={styles.name}>
        {item.name}
      </MetropolisText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.source} />
      </View>
      <MetropolisText bold style={styles.prise}>
        {item.prise}
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    borderRadius: 20,
    // marginTop: 15,
    marginBottom: 15,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    color: '#fff',
  },
  imageContainer: {
    width: 150,
    height: 95,
  },
  image: {
    width: 150,
    height: 160,
    marginTop: -28,
  },
  prise: {
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
  },
})

export default ProductSmallCard
