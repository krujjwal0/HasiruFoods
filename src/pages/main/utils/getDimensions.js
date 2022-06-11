import { Dimensions } from 'react-native'

export function getDimension(type) {
  const dimensions = Dimensions.get('window')
  if (type.toLowerCase() === 'h' || type.toLowerCase() === 'height')
    return dimensions.height
  if (type.toLowerCase() === 'w' || type.toLowerCase() === 'width')
    return dimensions.width
}
