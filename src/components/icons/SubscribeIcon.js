import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G, Rect } from 'react-native-svg'

const SubscribeIcon =  ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={32} width={32}>
        <G transform="translate(-1040 -604)">
          <Path
            d="M0,21.146a2.188,2.188,0,0,0,2.188,2.188H18.229a2.188,2.188,0,0,0,2.187-2.187V8.75H0Zm14.583-8.932a.548.548,0,0,1,.547-.547h1.823a.548.548,0,0,1,.547.547v1.823a.548.548,0,0,1-.547.547H15.13a.548.548,0,0,1-.547-.547Zm0,5.833a.548.548,0,0,1,.547-.547h1.823a.548.548,0,0,1,.547.547V19.87a.548.548,0,0,1-.547.547H15.13a.548.548,0,0,1-.547-.547ZM8.75,12.214a.548.548,0,0,1,.547-.547H11.12a.548.548,0,0,1,.547.547v1.823a.548.548,0,0,1-.547.547H9.3a.548.548,0,0,1-.547-.547Zm0,5.833A.548.548,0,0,1,9.3,17.5h1.82a.548.548,0,0,1,.547.547V19.87a.548.548,0,0,1-.547.547H9.3a.548.548,0,0,1-.547-.547ZM2.917,12.214a.548.548,0,0,1,.547-.547H5.286a.548.548,0,0,1,.547.547v1.823a.548.548,0,0,1-.547.547H3.464a.548.548,0,0,1-.547-.547Zm0,5.833a.548.548,0,0,1,.547-.547H5.286a.548.548,0,0,1,.547.547V19.87a.548.548,0,0,1-.547.547H3.464a.548.548,0,0,1-.547-.547ZM18.229,2.917H16.042V.729A.731.731,0,0,0,15.313,0H13.854a.731.731,0,0,0-.729.729V2.917H7.292V.729A.731.731,0,0,0,6.563,0H5.1a.731.731,0,0,0-.729.729V2.917H2.188A2.188,2.188,0,0,0,0,5.1V7.292H20.417V5.1a2.188,2.188,0,0,0-2.188-2.183Z"
            transform="translate(1045.792 608.333)"
            fill={fill}
          />
          <Rect height={32} width={32} transform="translate(1040 604)" />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SubscribeIcon