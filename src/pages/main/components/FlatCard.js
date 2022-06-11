import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import MetropolisText from 'MetropolisText'

const FlatCard = ({ item }) => {
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={styles.text}>
        {item.text}
      </MetropolisText>
      <Image source={item.icon} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    marginBottom: 4,
    marginTop: 15,
  },
  text: {
    color: '#373737',
    fontSize: 20,
    fontWeight: '900',
  },
  image: {
    width: 120,
    height: 70,
  },
})

export default FlatCard
