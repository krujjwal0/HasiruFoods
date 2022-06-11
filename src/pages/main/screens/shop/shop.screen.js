import ForEach from 'ForEach'
import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import theme from 'theme'
import OfferCard from '../../components/OfferCard'
import { dummyData } from '../../components/Product/data'
import ProductCard from '../../components/Product/ProductCard'

const ShopScreen = ({ navigation }) => {
  const ProductMapping = (item, index) => (
    <ProductCard item={item} navigation={navigation} key={index} />
  )

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <OfferCard />
        <ForEach data={dummyData} render={ProductMapping} />
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

export default ShopScreen
