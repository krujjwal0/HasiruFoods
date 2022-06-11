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

const EditModal = ({ color }, ref) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

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
          <SelectQuantity />
          <DaysPicker small color={color} />
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
})

export default React.forwardRef(EditModal)
