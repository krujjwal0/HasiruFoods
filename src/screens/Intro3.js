import React from 'react'
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
import MetropolisText from 'MetropolisText'

const Intro = () => {
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
      fontFamily: 'Metropolis',
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
      fontFamily: 'Metropolis',
    },
    inputView: {
      backgroundColor: '#F5F5F5',
      borderRadius: 4,
      width: 240,
      height: 36,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputAddView: {
      backgroundColor: '#F5F5F5',
      borderRadius: 32,
      width: 164,
      height: 36,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  })

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ marginTop: 55 }} source={icon} />
      </View>
      <View style={{ margin: 60 }}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Eva Green"
            placeholderTextColor="#232323"
            onChangeText={name => setName(name)}
          />
        </View>
        <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="evagreen@greenvalley.in"
              placeholderTextColor="#232323"
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.inputAddView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Add Address"
              placeholderTextColor="#232323"
              onChangeText={address => setAddress(address)}
            />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>

        <MetropolisText
          style={{
            fontSize: 20,
            color: '#373737',
            alignSelf: 'center',
            marginTop: 10,
          }}
          bold>
          SKIP
        </MetropolisText>
      </View>
    </SafeAreaView>
  )
}

export default Intro
