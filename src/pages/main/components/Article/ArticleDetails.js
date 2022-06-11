import { StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../utils/getDimensions'

const ArticleDetails = ({ item }) => {
  const { width, height } = Image.resolveAssetSource(item.imgSource)
  const [ImageRatio, setImageRatio] = useState(height / width)

  const ImageHeight = {
    height: (getDimension('w') - 40) * ImageRatio,
  }
  return (
    <View style={styles.root}>
      <Image source={item.imgSource} style={[ImageHeight, styles.image]} />
      <MetropolisText semiBold style={styles.title}>
        {item.title}
      </MetropolisText>
      <MetropolisText medium style={styles.text}>
        {item.text}
      </MetropolisText>
    </View>
  )
}

export default ArticleDetails

const styles = StyleSheet.create({
  root: {},
  image: {
    width: getDimension('w') - 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 5,
  },
  text: {
    fontSize: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    lineHeight: 20,
  },
})
