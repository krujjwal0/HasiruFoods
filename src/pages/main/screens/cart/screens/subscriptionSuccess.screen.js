import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import OrderSuccessIcon from '_icons/OrderSuccessIcon.svg'
import { useNavigation } from '@react-navigation/native'
import theme from 'theme'

const SubscriptionSuccessScreen = () => {
  const navigation = useNavigation()
  const handleOnPress = useCallback(() => {
    // navigation.navigate({ name:  })
  }, [])
  return (
    <View style={styles.root}>
      <MetropolisText semiBold style={styles.title}>
        Yay! Subscription Successful!
      </MetropolisText>
      <OrderSuccessIcon style={styles.icon} />
      <MetropolisText medium style={styles.small}>
        Your have successfully subscribed
      </MetropolisText>
      <MetropolisText medium style={styles.small}>
        for the month of June
      </MetropolisText>
      <Pressable
        android_ripple={{ color: theme.color.rippleGray, foreground: true }}
        style={styles.pressable}
        onPress={handleOnPress}>
        <MetropolisText semiBold style={styles.pressableText}>
          Manage Subscription
        </MetropolisText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    paddingTop: 0,
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  small: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 16,
  },
  strong: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  pressable: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 15,
    paddingVertical: 11,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  pressableText: {
    fontSize: 18,
    color: '#FFF',
  },
})

export default SubscriptionSuccessScreen
