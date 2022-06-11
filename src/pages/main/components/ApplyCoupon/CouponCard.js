import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const CouponCard = ({ item }) => {
  const handleOnPress = useCallback(() => {}, [])

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <MetropolisText semiBold style={styles.couponName}>
          Hasiru20
        </MetropolisText>
        <MetropolisText semiBold style={styles.offer}>
          20% Off
        </MetropolisText>
      </View>
      <MetropolisText medium style={styles.condition}>
        Recharge for a minimum of $450 to begin Subscription. Valid till 04 June
      </MetropolisText>
      <Pressable
        onPress={handleOnPress}
        style={styles.pressable}
        android_ripple={{ color: theme.color.rippleGray, foreground: true }}>
        <MetropolisText semiBold style={styles.pressableText}>
          Apply
        </MetropolisText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray + 'bb',
    padding: 15,
    borderRadius: 16,
    marginTop: 20,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponName: {
    fontSize: 21,
    marginRight: 'auto',
  },
  offer: {
    fontSize: 21,
    marginLeft: 'auto',
  },
  condition: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
  pressable: {
    backgroundColor: theme.color.primary,
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginTop: 15,
  },
  pressableText: {
    fontSize: 19,
    lineHeight: 24,
    textTransform: 'capitalize',
    color: '#fff',
  },
})

export default CouponCard
