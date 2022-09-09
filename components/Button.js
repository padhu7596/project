import { View, Text ,Button} from 'react-native'
import React from 'react'



const Footer = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

  return (
    <View>
      <Button title="+" onPress={Increment} />
      <Text>Count: {count}</Text>
        <Button title="-" onPress={Decrement} />
    </View>
  )
}

export default {Footer}
