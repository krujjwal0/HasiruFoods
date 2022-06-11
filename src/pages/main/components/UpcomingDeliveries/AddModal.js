import MetropolisText from 'MetropolisText'
import React, { useState, useCallback, useImperativeHandle } from 'react'
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import CloseIcon from '_icons/CloseIcon'
import theme from 'theme'
import SelectQuantity from './SelectQuantity'

const AddModal = ({ color }, ref) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(true)

  const handleOnClose = useCallback(() => {
    setIsEditModalOpen(false)
  }, [setIsEditModalOpen])

  useImperativeHandle(ref, () => ({ isEditModalOpen, setIsEditModalOpen }), [
    isEditModalOpen,
    setIsEditModalOpen,
  ])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEditModalOpen}
      onRequestClose={handleOnClose}>
      <TouchableWithoutFeedback onPress={handleOnClose}>
        <View style={styles.touchableClose} />
      </TouchableWithoutFeedback>
      <View style={styles.main}>
        <View style={styles.modalView}>
          <View style={styles.top}>
            <MetropolisText medium style={styles.title}>
              Edit Subscription
            </MetropolisText>
            <TouchableOpacity onPress={handleOnClose}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <SelectQuantity />
            <Pressable
              android_ripple={{
                color: theme.color.rippleGray,
                foreground: true,
              }}
              style={styles.pressable}>
              <MetropolisText semiBold style={styles.pressableText}>
                Add
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
    paddingBottom: 10,
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
  title: {
    fontSize: 15,
    marginLeft: 5,
    alignSelf: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  pressable: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 10,
    borderRadius: 13,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  pressableText: {
    color: '#FFF',
    fontSize: 18,
  },
})

export default React.forwardRef(AddModal)
