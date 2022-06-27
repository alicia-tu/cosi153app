import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <View style={styles.container}>
        <Text style = {{fontSize: 50}}>So far, the class number you have is: {count} </Text>
        <Button color = "green"
            title="+1 class" 
            onPress = {() => setCount(count+1)}
            />
        <Button color = "red"
            title="-1 class"
            onPress = {() => setCount(count-1)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 50, 
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
 
});
export default Counter;