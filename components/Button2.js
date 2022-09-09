import { View, Text ,StyleSheet,Button} from 'react-native'
import React,{useState} from 'react'
import { FAB } from '@rneui/themed'

const Button2 = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

return(
    <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        
        <FAB
            largesize
            color='white'
            icon={{ name: 'add', color: 'green', }}
            onPress={Increment}
        />
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Count: {count}</Text>
        <FAB
            small
            color='white'
            icon={{ name: 'delete', color: 'green', }}
            onPress={Decrement}
        />
    </View>
);
}


export default Button2