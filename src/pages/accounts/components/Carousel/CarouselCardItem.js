import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.source} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 30,
    height: 485,
    backgroundColor: 'white',
    margin: 0,
    borderRadius: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width - 30,
    height: 485,
    borderRadius: 0,
    marginLeft: 0,
  },
})

export default CarouselItem
