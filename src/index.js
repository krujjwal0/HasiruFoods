import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Main from './pages/main'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Intro1 from './screens/Intro1'
import Intro2 from './screens/Intro2'
import Intro3 from './screens/Intro3'

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <Intro3 /> */}
        <Main />
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App
