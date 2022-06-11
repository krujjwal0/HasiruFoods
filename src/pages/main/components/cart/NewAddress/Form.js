import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import TextField from './TextField'
import { FormProvider, useForm } from 'react-hook-form'
import ForEach from 'ForEach'

const Form = ({ TextFieldList, handleSubmit }) => {
  const formMethods = useForm()

  const handleError = errors => {
    console.warn(errors)
  }

  const TextFieldMapping = useCallback(
    (item, index) => (
      <TextField
        key={index}
        name={item.name}
        label={item.label}
        rules={item.rules}
        {...item}
        margin={styles.textFieldMargin}
      />
    ),
    [],
  )

  return (
    <View style={styles.root}>
      <FormProvider {...formMethods}>
        <ForEach data={TextFieldList} render={TextFieldMapping} />

        <Pressable
          onPress={formMethods.handleSubmit(handleSubmit, handleError)}
        />
      </FormProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 5,
  },
  textFieldMargin: {
    marginBottom: 20,
  },
})

export default Form
