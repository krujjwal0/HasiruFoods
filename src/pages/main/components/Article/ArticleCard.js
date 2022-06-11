import { StyleSheet, View, Image, Pressable } from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../utils/getDimensions'

const ArticleCard = ({ item, navigation }) => {
  const { width, height } = Image.resolveAssetSource(item.imgSource)
  const [ImageRatio, setImageRatio] = useState(height / width)

  const handleOnPress = useCallback(() => {
    navigation.navigate('ArticleScreen', item)
  }, [])

  const ImageHeight = {
    height: (getDimension('w') - 40) * ImageRatio,
  }

  return (
    <Pressable
      android_ripple={{
        color: '#bdbdbd',
        foreground: true,
      }}
      style={styles.pressable}
      onPress={handleOnPress}>
      <View style={styles.root}>
        <Image source={item.imgSource} style={[ImageHeight, styles.image]} />
        <MetropolisText semiBold style={styles.title}>
          {item.title}
        </MetropolisText>
      </View>
    </Pressable>
  )
}

export default ArticleCard

const styles = StyleSheet.create({
  pressable: {
    marginTop: 15,
    borderRadius: 24,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    overflow: 'hidden',
  },
  root: {},
  image: {
    width: getDimension('w') - 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
})
