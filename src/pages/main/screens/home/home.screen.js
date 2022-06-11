import React from 'react'

import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { dummyData } from '../../components/Carousel/data'
import { data } from '../../components/Article/data'

import img1 from '_assets/images/img1.png'
import img2 from '_assets/images/img2.png'
import theme from 'theme'

import Carousel from '../../components/Carousel'
import ArticleCard from '../../components/Article/ArticleCard'
import FlatCard from '../../components/FlatCard'
import ForEach from 'ForEach'

const data1 = [
  {
    text: 'Recipes',
    icon: img1,
  },
  {
    text: 'Reward',
    icon: img2,
  },
]

const HomeScreen = ({ navigation }) => {
  const ArticleMapping = (item, index) => (
    <ArticleCard item={item} navigation={navigation} key={index} />
  )

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Carousel data={dummyData} />
        <ForEach data={data1} Component={FlatCard} />
        <ForEach data={data} render={ArticleMapping} />
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
})

export default HomeScreen
