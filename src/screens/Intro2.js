import React, { useState, Ref } from 'react'
import {
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import intro from '_assets/images/intro.png'
import icon from '_assets/images/icon.png'
import Icon from 'react-native-vector-icons/Feather'
import MetropolisText from 'MetropolisText'

const Intro = () => {
  const [name, setName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ resizeMode: 'stretch', width: 360, height: 480 }}
          source={intro}
        />
        <Image style={{ position: 'absolute', marginTop: 55 }} source={icon} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <MetropolisText style={styles.text}>
          Log-in with your mobile
        </MetropolisText>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.inputView}>
          {/* <Text style={styles.TextInput}>+91</Text> */}
          <MetropolisText
            style={{
              alignSelf: 'center',
              paddingLeft: 10,
              fontSize: 20,
              color: '#232323',
            }}>
            +91 |
          </MetropolisText>
          <TextInput
            style={styles.NumInput}
            placeholder="Mobile Number"
            placeholderTextColor="#232323"
            onChangeText={name => setName(name)}
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.sendOtpView}>
          <Icon name="send" size={25} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>OTP</Text>
        <View style={styles.otpView}>
          <TextInput maxLength={1} keyboardType="numeric" />
        </View>
        <View style={styles.otpView}>
          <TextInput maxLength={1} keyboardType="numeric" />
        </View>
        <View style={styles.otpView}>
          <TextInput maxLength={1} keyboardType="numeric" />
        </View>
        <View style={styles.otpView}>
          <TextInput maxLength={1} keyboardType="numeric" />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <MetropolisText>Didn't receive OTP? </MetropolisText>
        <MetropolisText style={{ color: '#5E9C42' }}>Resend</MetropolisText>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <MetropolisText medium style={styles.buttonText}>
            Proceed
          </MetropolisText>
        </TouchableOpacity>
      </View>
      <MetropolisText
        style={{
          fontSize: 20,
          color: '#373737',
          alignSelf: 'center',
          marginTop: 6,
        }}
        bold>
        SKIP
      </MetropolisText>
    </SafeAreaView>
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
    // fontFamily: 'Metropolis',
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
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    // fontFamily: 'Metropolis',
  },
  NumInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    // fontFamily: 'Metropolis',
  },
  inputView: {
    backgroundColor: '#F3F3F3',
    borderRadius: 4,
    width: 240,
    height: 48,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
  },
  otpView: {
    backgroundColor: '#F3F3F3',
    borderRadius: 4,
    width: 41,
    height: 43,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sendOtpView: {
    backgroundColor: '#F3F3F3',
    borderRadius: 4,
    width: 41,
    height: 48,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})

export default Intro
