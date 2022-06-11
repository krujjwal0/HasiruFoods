import React, { useCallback, useRef } from 'react'
import {
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import theme from 'theme'
import Header from '../../../components/cart/Header'
import GPSLocationButton from '../../../components/cart/NewAddress/GPSLocationButton'
import Form from '../../../components/cart/NewAddress/Form'

const AddNewAddressScreen = () => {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()
  const input5 = useRef()

  const TextFieldList = [
    {
      name: 'name',
      label: 'Name',
      rules: {},
      placeholder: 'Eva Green',
      autoComplete: 'name',
      ref: input1,
      onSubmitEditing: () => input2.current.focus(),
    },
    {
      name: 'mobile',
      label: 'Mobile',
      keyboardType: 'phone-pad',
      rules: {},
      placeholder: '+91 00000 00000',
      autoComplete: 'tel',
      ref: input2,
      onSubmitEditing: () => input3.current.focus(),
    },
    {
      name: 'doorNo',
      label: 'Door No',
      rules: {},
      placeholder: '21',
      ref: input3,
      onSubmitEditing: () => input4.current.focus(),
    },
    {
      name: 'address',
      label: 'Address',
      rules: {},
      placeholder: 'Building name, Road name, Area, Colony',
      multiline: true,
      numberOfLines: 3,
      ref: input4,
      onSubmitEditing: () => input5.current.focus(),
    },

    {
      name: 'saveAs',
      label: 'Save as',
      rules: {},
      ref: input5,
      onSubmitEditing: () => input6.current.focus(),
    },
  ]

  const handleSubmit = useCallback(form => {
    console.log(form)
  }, [])

  const handleGPSLocation = useCallback(form => {
    console.log(form)
  }, [])

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={30}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Header label="Add new address" />

          <GPSLocationButton onPress={handleGPSLocation} />

          <View style={styles.divider} />

          <Form TextFieldList={TextFieldList} handleSubmit={handleSubmit} />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginTop: theme.element.headerHeight,
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 10,
  },
  divider: {
    height: 3,
    backgroundColor: theme.color.gray,
    marginBottom: 20,
    marginHorizontal: 5,
    borderColor: theme.color.rippleGray,
  },
})

export default AddNewAddressScreen
