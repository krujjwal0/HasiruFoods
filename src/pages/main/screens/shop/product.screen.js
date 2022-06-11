import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import ProductDetailsCard from '../../components/Product/ProductDetailsCard'
import theme from 'theme'

const ProductScreen = ({ navigation, route }) => {
  const item = route.params

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <ProductDetailsCard item={item} navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    marginTop: theme.element.headerHeight,
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 10,
  },
  text: {
    fontSize: 42,
  },
})

export default ProductScreen
