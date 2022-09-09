import { View, Text ,Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={style.logo}>
      <Image SOURCE={require('../assets/onam1')} />
    </View>
  )
}
const style = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizemode: 'contain',
    },
})

export default Header