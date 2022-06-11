import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import theme from 'theme'
import ArticleDetails from '../../components/Article/ArticleDetails'

const ArticleScreen = ({ navigation, route }) => {
  const item = route.params
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <ArticleDetails item={item} />
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

export default ArticleScreen
