import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import ForEach from 'ForEach'
import ProductCard from './ProductCard'
import theme from 'theme'

const CartList = ({ cart }) => {
  const productMapping = useCallback(
    (item, index) => (
      <ProductCard
        cartLength={cart.length}
        index={index}
        item={item}
        key={index}
      />
    ),
    [],
  )

  return (
    <View style={styles.root}>
      <ForEach data={cart} render={productMapping} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginTop: 7,
    borderBottomWidth: 2,
    borderColor: theme.color.gray,
  },
})

export default CartList
