import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import theme from 'theme'
import { useController, useFormContext } from 'react-hook-form'
import MetropolisText from 'MetropolisText'

const TextField = (props, ref) => {
  const { name, rules, defaultValue = '', label, margin, ...inputProps } = props

  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({ name, control, rules, defaultValue })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  return (
    <View style={[styles.root, margin]}>
      <View style={styles.main}>
        <MetropolisText style={styles.label} medium>
          {label}
        </MetropolisText>

        <TextInput
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          placeholderTextColor={theme.color.darkGray}
          {...inputProps}
          onEndEditing={() => console.log('end')}
          returnKeyType="next"
          ref={ref}
        />
      </View>

      {isError && (
        <MetropolisText style={styles.error} regular>
          {errorText}
        </MetropolisText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {},
  main: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 19,
    // alignSelf: 'center',
    marginTop: 14,
    marginLeft: 4,
    minWidth: 95,
  },
  input: {
    backgroundColor: theme.color.gray,
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontFamily: theme.font.medium,
    color: theme.color.black,
    fontSize: 17,
  },
  error: {},
})

export default React.forwardRef(TextField)
