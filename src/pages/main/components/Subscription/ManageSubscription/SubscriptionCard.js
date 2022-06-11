import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import { useState, useRef, useCallback } from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import EditModal from './EditModal'
import CancelModal from './CancelModal'

const SubscriptionCard = ({ item }) => {
  const editModalRef = useRef(null)
  const cancelModalRef = useRef(null)
  const activeStatusText = {
    color: theme.color.primary,
  }

  const inactiveStatusText = {
    color: theme.color.blue,
  }

  const handleEditModalOpen = useCallback(() => {
    // const isEditModalOpen = editModalRef?.current?.isEditModalOpen()
    const setIsEditModalOpen = editModalRef?.current?.setIsEditModalOpen

    setIsEditModalOpen(true)
  }, [editModalRef])

  const handleCancelModalOpen = useCallback(() => {
    // const isCancelModalOpen = cancelModalRef?.current?.isCancelModalOpen()
    const setIsCancelModalOpen = cancelModalRef?.current?.setIsCancelModalOpen

    setIsCancelModalOpen(true)
  }, [cancelModalRef])

  return (
    <View style={styles.root}>
      <EditModal ref={editModalRef} color={item.bgColor} />
      <CancelModal ref={cancelModalRef} color={item.bgColor} />
      <View style={styles.display}>
        <MetropolisText bold style={styles.name}>
          {item.name}
        </MetropolisText>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.source} />
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.statusBar}>
          {item.status.toLowerCase() === 'active' ? (
            <MetropolisText
              medium
              style={[styles.statusText, activeStatusText]}>
              Active
            </MetropolisText>
          ) : (
            <MetropolisText
              medium
              style={[styles.statusText, inactiveStatusText]}>
              Inactive
            </MetropolisText>
          )}
        </View>
        <Pressable
          android_ripple={{
            color: theme.color.rippleGray,
            foreground: true,
          }}
          style={[styles.pressable, styles.editButton]}
          onPress={handleEditModalOpen}>
          <MetropolisText
            medium
            style={[styles.pressableText, styles.editButtonText]}>
            Edit
          </MetropolisText>
        </Pressable>
        <View style={styles.info}>
          <MetropolisText medium style={styles.text}>
            Quantity: <MetropolisText semiBold>{item.quantity}</MetropolisText>
          </MetropolisText>
          <MetropolisText medium style={styles.text}>
            Delivering on
          </MetropolisText>
          <MetropolisText semiBold style={styles.text}>
            Tu, Th, Fr
          </MetropolisText>
        </View>
        <View style={styles.nav}>
          {item.status.toLowerCase() === 'active' ? (
            <Pressable
              android_ripple={{
                color: theme.color.rippleGray,
                foreground: true,
              }}
              style={[styles.pressable, styles.cancelButton]}
              onPress={handleCancelModalOpen}>
              <MetropolisText
                semiBold
                style={[styles.pressableText, styles.cancelButtonText]}>
                Cancel
              </MetropolisText>
            </Pressable>
          ) : (
            <Pressable
              android_ripple={{
                color: theme.color.rippleGray,
                foreground: true,
              }}
              style={styles.pressable}>
              <MetropolisText semiBold style={styles.pressableText}>
                Recharge
              </MetropolisText>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: theme.color.gray + 99,
    borderRadius: 18,
    marginTop: 18,
    paddingRight: 13,
  },
  display: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
  },
  name: {
    fontSize: 12,
  },
  imageContainer: {
    width: 100,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 170,
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
  },
  rightSection: {
    flex: 1,
  },
  statusBar: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    marginLeft: 'auto',
    marginBottom: 'auto',
  },
  statusText: {
    fontSize: 13,
  },
  info: {
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  nav: {
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
  },
  pressable: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 5,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  pressableText: {
    color: '#FFF',
  },
  editButton: {
    marginBottom: -16,
    marginLeft: 'auto',
    backgroundColor: 'transparent',
    // backgroundColor: '#fff',
    padding: 12,
  },
  editButtonText: {
    color: theme.color.black,
    fontSize: 13,
  },
  cancelButton: {
    backgroundColor: theme.color.darkGray,
  },
  cancelButtonText: {
    color: '#fff',
  },
})

export default SubscriptionCard
