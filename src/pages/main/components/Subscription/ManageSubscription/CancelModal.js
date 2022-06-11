import MetropolisText from 'MetropolisText'
import React, { useState, useCallback, useImperativeHandle } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import CloseIcon from '_icons/CloseIcon'
import theme from 'theme'
import DaysPicker from '../DaysPicker'
import SelectQuantity from './SelectQuantity'

const CancelModal = (_, ref) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const handleOnClose = useCallback(() => {
    setIsCancelModalOpen(false)
  }, [setIsCancelModalOpen])

  useImperativeHandle(
    ref,
    () => ({ isCancelModalOpen, setIsCancelModalOpen }),
    [isCancelModalOpen, setIsCancelModalOpen],
  )

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isCancelModalOpen}
      onRequestClose={handleOnClose}>
      <TouchableWithoutFeedback onPress={handleOnClose}>
        <View style={styles.touchableClose} />
      </TouchableWithoutFeedback>
      <View style={styles.main}>
        <View style={styles.modalView}>
          <MetropolisText medium style={styles.text}>
            Are you sure you want to cancel the subscription?
          </MetropolisText>
          <View style={styles.nav}>
            <Pressable
              android_ripple={{
                color: '#fff',
                foreground: true,
              }}
              style={[styles.pressable]}>
              <MetropolisText bold style={[styles.pressableText]}>
                No
              </MetropolisText>
            </Pressable>
            <Pressable
              android_ripple={{
                color: '#fff',
                foreground: true,
              }}
              style={[styles.pressable, styles.marginLeft]}>
              <MetropolisText bold style={[styles.pressableText]}>
                Yes
              </MetropolisText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 18,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    shadowColor: '#0003',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  touchableClose: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 19,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    lineHeight: 22,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressable: {
    backgroundColor: theme.color.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 13,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
    flex: 1,
  },
  pressableText: {
    color: '#FFF',
    fontSize: 22,
  },
  marginLeft: {
    marginLeft: 15,
  },
})

export default React.forwardRef(CancelModal)
