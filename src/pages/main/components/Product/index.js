import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MetropolisText from 'MetropolisText'
import { dummyData } from './data'
import ProductCard from './ProductCard'

const Product = ({ navigation }) => {
  const [data, setData] = useState(dummyData)
  if (data && data.length)
    return data.map((item, index) => {
      return <ProductCard item={item} navigation={navigation} key={index} />
    })
  else {
    console.log('Please Provide Product')
  }
}

const styles = StyleSheet.create({
  root: {},
})

export default Product
