import React from 'react'
import {
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import intro from '_assets/images/intro.png'
import icon from '_assets/images/icon.png'
import MetropolisText from 'MetropolisText'
const AccountRegistration = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ resizeMode: 'stretch', width: 360, height: 500 }}
          source={intro}
        />
        <Image style={{ position: 'absolute', marginTop: 55 }} source={icon} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <MetropolisText medium style={styles.text}>
          Kick-start your healthy lifestyle
        </MetropolisText>
        <MetropolisText medium style={styles.text}>
          with Hasiru
        </MetropolisText>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <MetropolisText bold style={styles.buttonText}>
            Get Started
          </MetropolisText>
        </TouchableOpacity>
      </View>
      <MetropolisText
        bold
        style={{
          fontSize: 20,
          color: '#373737',
          alignSelf: 'center',
          marginTop: 15,
        }}>
        SKIP
      </MetropolisText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textInput: {
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#5E9C42',
    width: 225,
    height: 42,
    borderRadius: 37,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 23,
  },
  text: {
    fontSize: 18,
    color: '#373737',
    alignSelf: 'center',
  },
})

export default AccountRegistration
