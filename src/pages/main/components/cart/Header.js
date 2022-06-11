import React from 'react'
import { View, Pressable, Dimensions, StyleSheet } from 'react-native'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import { getDimension } from '../../utils/getDimensions'
import ArrowBackIcon from '_icons/ArrowBackIcon'
import { useNavigation } from '@react-navigation/native';

const Header = ({ label }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <Pressable
        android_ripple={{ color: '#fff', foreground: true }}
        style={styles.backIcon}
        onPress={() => {
          navigation.goBack()
        }}>
        <ArrowBackIcon fill="#fff" />
      </Pressable>
      <MetropolisText medium style={styles.title}>
        {label}
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    backgroundColor: '#000',
    borderRadius: 40,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 0,
    alignSelf: 'center',
    flex: 1,
    marginLeft: 'auto',
    textAlign: 'center',
    marginRight: 15,
  },
})

export default Header
